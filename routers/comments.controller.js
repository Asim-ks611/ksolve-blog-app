const mongoose = require("mongoose")
const Comment = require("../models/comment.model")


//////////-------- GET ------//////////
const  getAllComments =async  (req,res)=>{
    let slug = req.params.slug
    try {
        let comment = await Comment.find({}).populate('post').where(`post:{slug:${slug}}`)

    } catch (error) {
        
    }
}


//////////-------- ADD ------//////////
const  addComment = async (req,res)=>{
    let {name,email,comment,post} = req.body
    console.log(req.body);
    try {
        let cmnt = new Comment({
            name,email,comment,post
        })
        await cmnt.save();
        res.status(200).json({message:"Comment Added Successfully",success:true})
    } catch (error) {
        res.status(400).json({message:"The comment cannot be added",success:false,error:error.message})
    }
}

//////////-------- UPDATE ------//////////
const  updateComment =async  (req,res)=>{
    console.log("updateComment");
}

//////////-------- DELETE ------//////////
const  deleteComment =async  (req,res)=>{
    console.log("deleteComment");
}

module.exports = {
    getAllComments,
    addComment,
    updateComment,
    deleteComment
}