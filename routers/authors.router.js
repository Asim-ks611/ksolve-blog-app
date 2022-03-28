const express = require("express")
const authorsRouter = express.Router()
const {addAuthor,updateAuthor,deleteAuthor} = require("./authors.controller.js")


// authorsRouter.get('/',getAllAuthors)
authorsRouter.post('/',addAuthor)
authorsRouter.put('/:id',updateAuthor)
authorsRouter.delete('/:id',deleteAuthor)

module.exports = authorsRouter