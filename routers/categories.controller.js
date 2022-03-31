const mongoose = require("mongoose")
const Category = require("../models/category.model")



//////////-------- GET ------//////////
const  getAllCategories =async  (req,res)=>{
    try {
        let caltegories = await Category.find({});
         res.status(200).send(caltegories)    
    } catch (error) {
        res.status(500).json({message:"Failed to fetch Posts",success:false,error:error.message})
    }
}

//////////-------- ADD ------//////////
const  addCategory = async  (req,res)=>{
    let {name,slug,posts} = req.body
    try {
        let category = new Category({
            name,slug,posts
        })
        await category.save();
        res.status(200).json({message:"Category Added Successfully",category})
    } catch (error) {
        res.status(400).json({message:"The category cannot be added",success:false})
    }

}

//////////-------- UPDATE ------//////////
const  updateCategory =async  (req,res)=>{
    console.log("updateCategory");
}

//////////-------- DELETE ------//////////
const  deleteCategory =async  (req,res)=>{
    console.log("deleteCategory");
}

module.exports = {
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
}