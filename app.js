import express from "express";
import { config } from "dotenv";
import Router from "./Routes/SongRoutes.js";
import USerRouter from "./Routes/UserRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
config({ path: "./config.env" });
app.use(cors());

//Routes
app.use("/api/v1", Router);
app.use("/api/v1", USerRouter);
export default app;
