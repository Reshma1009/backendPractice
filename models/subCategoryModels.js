const mongoose = require("mongoose");

const { Schema } = mongoose;
let subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  isActive: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

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
module.exports = mongoose.model("SubCategory", subCategorySchema);
