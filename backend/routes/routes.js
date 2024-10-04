import express from "express";
import {
  add,
  deleteAll,
  deleteProduct,
  show,
} from "../controller/productController.js";

const route = express.Router();

route.post("/add", add);
route.get("/show", show);
route.delete("/delete/:lombaid", deleteProduct);
route.delete("/deleteall", deleteAll);

export default route;
