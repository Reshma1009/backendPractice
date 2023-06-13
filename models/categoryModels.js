const mongoose = require("mongoose");

const { Schema } = mongoose;
let categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  isActive: {
    type: Boolean,
    default: false,
  },
  subCategory: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],
  status: {
    type: String,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});
module.exports= mongoose.model("Category",categorySchema)
