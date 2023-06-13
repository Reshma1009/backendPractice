const express = require( "express" );
const _ = express.Router();
const { createCategoryCotroller, catStatusUpdateCotroller, createSubCategoryController, subCateStatusController } = require( "../../controler/category/category" );

_.post("/createcategory", createCategoryCotroller)
_.post("/statuscategory", catStatusUpdateCotroller)
_.post("/subcategory", createSubCategoryController)
_.post("/statussubcategory", subCateStatusController)



module.exports = _;