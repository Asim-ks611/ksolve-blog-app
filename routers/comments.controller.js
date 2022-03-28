const mongoose = require("mongoose")
const Comment = require("../models/comment.model")


//////////-------- GET ------//////////
const  getAllComments = (req,res)=>{
    console.log("getAllComments");
    res.status(200).json({message:"getAllComments"})
}


//////////-------- ADD ------//////////
const  addComment = (req,res)=>{
    console.log("addComment");
}

//////////-------- UPDATE ------//////////
const  updateComment = (req,res)=>{
    console.log("updateComment");
}

//////////-------- DELETE ------//////////
const  deleteComment = (req,res)=>{
    console.log("deleteComment");
}

module.exports = {
    getAllComments,
    addComment,
    updateComment,
    deleteComment
}