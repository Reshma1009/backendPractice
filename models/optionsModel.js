const mongoose = require("mongoose");

const { Schema } = mongoose;
let optionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
        required: true,
      },
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
module.exports = mongoose.model("Option", optionSchema);
