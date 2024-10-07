import toko from "../model/productModel.js";

export const add = async (req, res) => {
  try {
    await toko.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};

export const show = async (req, res) => {
  try {
    const data = await toko.find();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await toko.deleteOne({ _id: req.params.productid });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await toko.deleteMany();

    res.json(200);
  } catch (error) {
    console.log(error);
  }
};
