const express = require("express")
const commentsRouter = express.Router()
const {getAllComments,getAllCommentsByPostId,addComment,updateComment,deleteComment} = require("./comments.controller.js")


commentsRouter.get('/',getAllComments)
commentsRouter.get('/:postId',getAllCommentsByPostId)
commentsRouter.post('/',addComment)
commentsRouter.put('/:id',updateComment)
commentsRouter.delete('/:id',deleteComment)

module.exports = commentsRouter