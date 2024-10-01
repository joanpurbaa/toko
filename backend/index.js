import express from "express";
import "dotenv/config";
import route from "./routes/routes.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.DATABASE_URL);

app.use(express.json());
app.use(route);

app.listen(process.env.PORT);
