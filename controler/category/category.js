const Category = require("../../models/categoryModels.js");
const createCategoryCotroller = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.json({ error: "Category name is required" });
  }
  let existingCategory = await Category.find({ name });

  if (existingCategory.length > 0) {
    return res.json({ error: "Category already exists. Try another one" });
  }
  let createCategory = new Category({
    name,
    description,
  } );
  createCategory.save()

  res.json({ success: "Category sucessfully created " });
};

module.exports = { createCategoryCotroller };
