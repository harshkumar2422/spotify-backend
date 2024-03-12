import express from "express"
import { createUserbyemail } from "../controllers/UserController.js"


const Router = express.Router()

//singup by email and password

Router.route("/signup").post(createUserbyemail)



export default Router
