// const express = require("express");
// const { addSongs } = require("../controllers/SongsController");
// // const cpUpload0 = require("../middlewares/ImageandSongs");
// const singleUpload = require("../middlewares/ImageandSongs");
import express from "express"
import {addPoster, addSongs, getSong} from"../controllers/SongsController.js"
import singleUpload from "../middlewares/ImageandSongs.js"

const Router = express.Router()

Router.route("/addsong").post(singleUpload,addSongs)
Router.route("/Songs").get(getSong)

//poster 
Router.route("/addPoster").post(singleUpload,addPoster)

export default Router
