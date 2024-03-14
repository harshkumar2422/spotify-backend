import { Song } from "../Schemas/songs.js";
import cloudinary from "cloudinary";
import getDataUri from "../Utils/dataUri.js";
import ErrorHandler from "../Utils/ErrorHandler.js";
import { Poster } from "../Schemas/Poster.js";

export const addSongs = async (req, res, next) => {
  try {
    const { songname, posterId } = req.body;
    if (!songname || !posterId)
      return next(new ErrorHandler("Please enter all fields", 400));
    const file = req.file;

    const fileUri = getDataUri(file);

    // Upload to Cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
      resource_type: "video",
      public_id: `audio_${Date.now()}`,
      format: "mp3",
      timeout: 120000,
    });

    if (!myCloud || !myCloud.public_id) {
      throw new ErrorHandler(
        "Error uploading to Cloudinary or missing public_id",
        500
      );
    }

    // Create song entry in the database
    const upload = await Song.create({
      songname,
      song: { public_id: myCloud.public_id, url: myCloud.secure_url },
      poster: posterId,
    });

    res.status(201).json({
      success: true,
      upload,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

export const getSong = async (req, res, next) => {
  try {
    const songs = await Song.find().populate("poster");
    if (!songs) return next(new ErrorHandler("Some technical issue", 500));
    res.status(200).json({
      success: true,
      songs,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

export const addPoster = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) return next(new ErrorHandler("Please upload a file", 400));

    const fileUri = getDataUri(file);

    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);
    const poster = await Poster.create({
      url: myCloud.secure_url,
      public_id: myCloud.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Poster created successfully",
      poster,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};
