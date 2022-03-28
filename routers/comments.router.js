const express = require("express")
const commentsRouter = express.Router()
const {getAllComments,addComment,updateComment,deleteComment} = require("./comments.controller.js")


commentsRouter.get('/',getAllComments)
commentsRouter.post('/',addComment)
commentsRouter.put('/:id',updateComment)
commentsRouter.delete('/:id',deleteComment)

module.exports = commentsRouter