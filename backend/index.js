import express from "express";
import "dotenv/config";
import route from "./routes/routes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose.connect(process.env.DATABASE_URL);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(route);

app.listen(process.env.PORT);
