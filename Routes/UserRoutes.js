import express from "express"
import { createUserbyemail, login } from "../controllers/UserController.js"


const Router = express.Router()

//singup by email and password

Router.route("/signup").post(createUserbyemail)
Router.route("/login").post(login)



export default Router
