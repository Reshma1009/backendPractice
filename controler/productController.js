const Product = require("../models/productModel");
const User = require("../models/userModels");
const Variant = require( "../models/variantModel" );


const securedProduct = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({ error: "Unauthorized" });
  }

  const userId = req.headers.authorization.split("@")[1];
  const userPass = req.headers.authorization.split("@")[2];
  let user = await User.find({ _id: userId });

  if (user.length > 0) {
    if (userPass == process.env.MERCHANT_SECRET_KEY) {
      if (user[0].role == "merchant" && user[0].merchant == true) {
        next();
      }
    } else {
      return res.json({ error: "You are not able to create a product. pass" });
    }
  }
};
const createProduct = async (req, res) => {
  const { name, description, image, store } = req.body;

  if (!name) {
    return res.json({ error: "Category name is required" });
  } else if (!description) {
    return res.json({ error: "Description name is required" });
  } else if (!image) {
    return res.json({ error: "Image name is required" });
  } else
  {
    let duplicateProduct = await Product.find({ name });
    if (duplicateProduct.length > 0) {
      return res.json({ error: "Product already Exists" });
    }
    let product = new Product({
      name,
      description,
      image,
      store,

    });
    product.save();

    res.json({ success: "Product created successfully" });
  }
};
const createVariant = async (req, res) => {
  const { name, image, product } = req.body;
  if (!name) {
    return res.json({ error: "Category name is required" });
  } else if (!image) {
    return res.json({ error: "Image name is required" });
  } else {
    /* let duplicateVariant = await Product.find({ name });
    if (duplicateVariant.length > 0) {
      return res.json({ error: "Variant already Exists" });
    } else { */
      let variant = new Variant({
        name,
        image,
        product,
      });
      variant.save();
      await Product.findOneAndUpdate(
        { _id: variant.product },
        { $push: { variants: variant._id } },
        { new: true }
      );
      res.json({ success: "Variant created successfully" });
    }
  // }

};

module.exports = { securedProduct, createProduct, createVariant };
