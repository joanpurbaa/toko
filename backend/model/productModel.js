import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
  name: String,
  price: String
})

const product = mongoose.model("product", productSchema);

export default product;