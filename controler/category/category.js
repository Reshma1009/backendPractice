const Category = require("../../models/categoryModels.js");
const SubCategory = require("../../models/subCategoryModels.js");

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
  });
  createCategory.save();

  res.json({ success: "Category sucessfully created " });
};

const catStatusUpdateCotroller = async (req, res) => {
  const { name, status } = req.body;

  // let existingCategory = await Category.find({ name });
  if (status == "rejected" || status == "waiting") {
    let existingCategory = await Category.findOneAndUpdate(
      { name },
      { status, isActive: false },
      { new: true }
    );

    return res.json({ success: "Category sucessfully Updated  " });
  } else if (status == "approved") {
    let existingCategory = await Category.findOneAndUpdate(
      { name },
      { status, isActive: true },
      { new: true }
    );
    return res.json({ success: "2 Category sucessfully Updated  " });
  }
};

const createSubCategoryController = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.json({ error: "Sub category name is required" });
  }
  let existingSubCategory = await SubCategory({ name });
  if (existingSubCategory.length > 0) {
    return res.json({ error: "Sub category is already exists. Try another" });
  }
  let subCategory = new SubCategory({
    name,
    description,
  });
  subCategory.save();
  res.json({ success: "Sub category is successfully Created" });
};
const subCateStatusController = async (req, res) => {
  const { name, status } = req.body;
  let existingSubCategory = await SubCategory.findOneAndUpdate({ name });
  if (status == "rejected" || status == "waiting") {
    let existingSubCategory = await SubCategory.findOneAndUpdate(
      { name },
      { status, isActive: false },
      { new: true }
    );
    return res.json({ success: "Sub category is successfully Updated" });
  } else if ( status == "approved" )
  {
     let existingSubCategory = await SubCategory.findOneAndUpdate(
       { name },
       { status, isActive: true },
       { new: true }
     );
    res.json({ success: "2 Sub category is successfully Created" });
  }
};

module.exports = {
  createCategoryCotroller,
  catStatusUpdateCotroller,
  subCateStatusController,
  createSubCategoryController,
};
