import toko from "../model/product.js";

export const add = async (req, res) => {
  try {
    await toko.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const show = async (req, res) => {
  try {
    res.json(await toko.find({ name: "iphone" }));
  } catch (error) {
    console.log(error);
  }
};
