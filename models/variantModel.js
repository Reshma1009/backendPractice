const mongoose = require("mongoose");

const { Schema } = mongoose;
let variantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  options: [
    {
      type: Schema.Types.ObjectId,
      ref: "Option",
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
module.exports = mongoose.model("Variant", variantSchema);
