const express = require( "express" );
const _ = express.Router();
const { createCategoryCotroller } = require( "../../controler/category/category" );

_.use("/createcategory", createCategoryCotroller)



module.exports = _;