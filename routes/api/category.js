const express = require( "express" );
const { createCategoryCotroller, catStatusUpdateCotroller, createSubCategoryController, subCateStatusController, getAllCategory, getAllSubCategory } = require( "../../controler/category" );
const _ = express.Router();


_.post("/createcategory", createCategoryCotroller)
_.post("/statuscategory", catStatusUpdateCotroller)
_.post("/subcategory", createSubCategoryController)
_.post("/statussubcategory", subCateStatusController)
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);



module.exports = _;