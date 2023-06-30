const mongoose = require("mongoose");

const { Schema } = mongoose;
let productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Variant",
    },
  ],

  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});
module.exports = mongoose.model("Product", productSchema);
