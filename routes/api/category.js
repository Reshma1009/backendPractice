const express = require( "express" );
const _ = express.Router();
const { createCategoryCotroller, catStatusUpdateCotroller, createSubCategoryController, subCateStatusController, getAllCategory, getAllSubCategory } = require( "../../controler/category/category" );

_.post("/createcategory", createCategoryCotroller)
_.post("/statuscategory", catStatusUpdateCotroller)
_.post("/subcategory", createSubCategoryController)
_.post("/statussubcategory", subCateStatusController)
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);



module.exports = _;