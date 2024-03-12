import app from "./app.js";
import cloudinary from "cloudinary";

import { connectDb } from "./database.js";




connectDb()


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(4000, () => {
  console.log("server is workinf at port 4000");
});
