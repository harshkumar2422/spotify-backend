import mongoose from "mongoose";
const songSchema = new mongoose.Schema(
  {
    poster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poster",
    },
    song: {
      public_id: String,
      url: String,
    },
    songname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Song = mongoose.model("Song", songSchema);
