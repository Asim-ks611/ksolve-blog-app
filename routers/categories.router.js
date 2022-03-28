const express = require("express")
const categoriesRouter = express.Router()
const {getAllCategories,addCategory,updateCategory,deleteCategory} = require("./categories.controller.js")


categoriesRouter.get('/',getAllCategories)
categoriesRouter.post('/',addCategory)
categoriesRouter.put('/:id',updateCategory)
categoriesRouter.delete('/:id',deleteCategory)

module.exports = categoriesRouter