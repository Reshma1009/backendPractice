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
  const { name, description, category } = req.body;
  // console.log(name, description, "category is  ==> , ", category);
  if (!name) {
    return res.json({ error: "Sub category name is required" });
  }
  let existingSubCategory = await SubCategory.find({ name });
  if (existingSubCategory.length > 0) {
    return res.json({ error: "Sub category is already exists. Try another" });
  }
  let subCategory = new SubCategory({
    name,
    description,
    category,
  });
  subCategory.save();
  await Category.findOneAndUpdate(
    { _id: subCategory.category },
    { $push: { subCategory: subCategory._id } },
    { new: true }
  );
  res.json({ success: "Sub category is successfully Created" });
};
const subCateStatusController = async (req, res) => {
  const { name, status } = req.body;
  if (status == "rejected" || status == "waiting") {
    let existingSubCategory = await SubCategory.findOneAndUpdate(
      { name },
      { status, isActive: false },
      { new: true }
    );
    return res.json({ success: "Sub category is successfully Updated" });
  } else if (status == "approved") {
    let existingSubCategory = await SubCategory.findOneAndUpdate(
      { name },
      { status, isActive: true },
      { new: true }
    );
    res.json({ success: "2 Sub category is successfully Created" });
  }
};

const getAllCategory = async (req, res) => {
  let data = await Category.find({}).populate("subCategory");
  res.json(data);
};
const getAllSubCategory = async (req, res) => {
  let data = await SubCategory.find({}).populate("category");
  res.json(data);
};

module.exports = {
  createCategoryCotroller,
  catStatusUpdateCotroller,
  subCateStatusController,
  createSubCategoryController,
  getAllCategory,
  getAllSubCategory,
};
