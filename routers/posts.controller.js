const mongoose = require("mongoose");
const Post = require("../models/post.model");

//////////-------- GET ------//////////
const getAllPosts = async (req, res) => {
  try {
    let allPosts = await Post.find({});
    res.status(200).send(allPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Posts", success: false });
  }
};

const getFullPosts = async (req, res) => {
  try {
    let fullPosts = await Post.find({}).populate("categories comments author");
    res.status(200).send(fullPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Posts", success: false });
  }
};

const getPostDetails = async (req, res) => {
  let slug = req?.params?.slug;
  console.log(slug)
  try {
    let detailedPost = await Post.findOne({ slug: slug }).populate(
      "categories comments author"
    );
    res.status(200).send(detailedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Posts", success: false });
  }
};

const getRecentPosts = async (req, res) => {
  try {
    let recentPosts = await Post.find({})
      .select(["title", "slug","image","createdAt"])
      .sort({ createdAt:"desc" })
      .limit(4);
    res.status(200).send(recentPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Posts", success: false });
  }
  //-1 for descending & 1 for ascending
};

const getSimilarPosts = async (req, res) => {
//   let categories = req?.query?.categories;
  let slug = req?.query?.slug;
  try {
    let simlarPosts = await Post.find({})
      .where("slug")
      .ne(slug)
      .limit(3)
      .select(["title", "image", "createdAt", "slug"]);
    res.status(200).send(simlarPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Posts", success: false });
  }
};

//////////-------- ADD ------//////////

const addPost = async (req, res) => {
  let {
    title,
    slug,
    excerpt,
    content,
    image,
    featuredPost,
    comments,
    categories,
    author,
  } = req.body;
  try {
    let post = new Post({
      title,
      slug,
      excerpt,
      content,
      image,
      featuredPost,
      comments,
      categories,
      author,
    });
    await post.save();
    res.status(200).json({ message: "Post Added Successfully", post });
  } catch (error) {
    res
      .status(400)
      .json({ message: "The post cannot be added", error: error.message });
  }
};

//////////-------- UPDATE ------//////////
const updatePost = async (req, res) => {
  console.log("updatePost");
};

//////////-------- DELETE ------//////////
const deletePost = async (req, res) => {
  console.log("deletePost");
};

module.exports = {
  getAllPosts,
  getFullPosts,
  getPostDetails,
  getRecentPosts,
  getSimilarPosts,
  addPost,
  updatePost,
  deletePost,
};
