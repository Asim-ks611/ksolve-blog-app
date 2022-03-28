const mongoose = require("mongoose")
const Category = require("../models/category.model")



//////////-------- GET ------//////////
const  getAllCategories = (req,res)=>{
    console.log("getAllCategories");
    res.status(200).json({message:"getAllCategories"})
}


//////////-------- ADD ------//////////
const  addCategory = (req,res)=>{
    console.log("addCategory");

}

//////////-------- UPDATE ------//////////
const  updateCategory = (req,res)=>{
    console.log("updateCategory");
}

//////////-------- DELETE ------//////////
const  deleteCategory = (req,res)=>{
    console.log("deleteCategory");
}

module.exports = {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
}