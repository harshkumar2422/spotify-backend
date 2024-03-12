// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");

// const Storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "uploads/Songs",
//     allowed_formats: [ "mp3","jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf",],
//   },
// });
// const upload = multer({storage:Storage})
// var cpUpload0 = upload.fields([
//     { name: "image", maxCount: 1 },
//     { name: "song"},
//   ]);

import multer from "multer";

const storage = multer.memoryStorage();
const singleUpload = multer({ storage: storage }).single('file');


// const singleUpload = multer({ storage }).single("audio");

export default singleUpload;
