const express = require("express")
const postsRouter = express.Router()
const {getAllPosts,addPost,updatePost,deletePost} = require("./posts.controller.js")


postsRouter.get('/',getAllPosts)
postsRouter.post('/',addPost)
postsRouter.put('/:id',updatePost)
postsRouter.delete('/:id',deletePost)

module.exports = postsRouter