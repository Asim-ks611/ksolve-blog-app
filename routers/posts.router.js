const express = require("express")

const { getAllPosts,getFullPosts,getPostDetails,getRecentPosts,getSimilarPosts,
    addPost,updatePost,deletePost } = require("./posts.controller.js")

const postsRouter = express.Router()

postsRouter.get('/',getAllPosts)
postsRouter.get('/full',getFullPosts)
postsRouter.get('/detailed/:slug',getPostDetails)
postsRouter.get('/recent',getRecentPosts)
postsRouter.get('/similar',getSimilarPosts)
postsRouter.post('/',addPost)
postsRouter.put('/:id',updatePost)
postsRouter.delete('/:id',deletePost)

module.exports = postsRouter