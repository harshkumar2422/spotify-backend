import mongoose from "mongoose";
const USerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    googleID: { type: String },
    facebookID: { type: String },
    playlist: [
      {
        songs: {
          type: mongoose.Schema.Types.ObjectID,
          ref: "Song",
        },
        poster: {
          type: mongoose.Schema.Types.ObjectID,
          ref: "SongPoster",
        },
      },
    ],
    otp: { type: String },
    otpExpiration: { type: Date },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", USerSchema);
