const mongoose = require("mongoose")
const Post = require("../models/post.model")


//////////-------- GET ------//////////
const  getAllPosts = (req,res)=>{
    console.log("getAllPosts");
    res.status(200).json({message:"getAllPosts"})
}


//////////-------- ADD ------//////////
const  addPost = (req,res)=>{
    console.log("addPost");
}

//////////-------- UPDATE ------//////////
const  updatePost = (req,res)=>{
    console.log("updatePost");
}

//////////-------- DELETE ------//////////
const  deletePost = (req,res)=>{
    console.log("deletePost");
}

module.exports = {
    getAllPosts,
    addPost,
    updatePost,
    deletePost
}