const mongoose = require("mongoose");
const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

//////////-------- GET ------//////////
const getAllComments = async (req, res) => {
  let slug = req.params.slug;
  try {
    let comments = await Comment.find({});
    res.status(200).send({ comments, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({
        message: "No comments are found",
        success: false,
        error: error.message,
      });
  }
};
const getAllCommentsByPostId = async (req, res) => {
  let postId = req.params.postId;
  try {
    let commentsByPostId = await Comment.find({ post: postId });
    return res.status(200).send({ commentsByPostId, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({
        message: "No comments are found",
        success: false,
        error: error.message,
      });
  }
};

//////////-------- ADD ------//////////
const addComment = async (req, res) => {
  let { name, email, comment, post } = req.body;
  console.log(req.body);
  try {
    let newComment = new Comment({
      name,
      email,
      comment,
      post,
    });
    await newComment.save();
    let Id = await newComment._id;
    await Post.updateOne({ _id: post }, { $push: { comments: Id } });
    res
      .status(200)
      .json({ message: "Comment Added Successfully", success: true });
  } catch (error) {
    res
      .status(400)
      .json({
        message: "The comment cannot be added",
        success: false,
        error: error.message,
      });
      console.log(error.message);
  }
};

//////////-------- UPDATE ------//////////
const updateComment = async (req, res) => {
  console.log("updateComment");
};

//////////-------- DELETE ------//////////
const deleteComment = async (req, res) => {
  console.log("deleteComment");
};

module.exports = {
  getAllComments,
  getAllCommentsByPostId,
  addComment,
  updateComment,
  deleteComment,
};
