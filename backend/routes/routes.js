import express from "express";
import { add, show } from "../controller/product.js";

const route = express.Router();

route.post("/add", add)
route.get("/show", show)

export default route;