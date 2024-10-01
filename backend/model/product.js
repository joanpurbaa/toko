import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
  name: String,
  price: mongoose.Types.Decimal128
})

const product = mongoose.model("product", productSchema);

export default product;