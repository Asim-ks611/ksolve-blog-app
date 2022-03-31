const mongoose = require("mongoose")
const Author = require("../models/author.model")
const bcrypt = require('bcryptjs')


//////////-------- MULTER ---------///////////
const multer = require('multer')
const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error(
      "Invalid Image Type, Only Allows png,jpg & jpeg"
    );
    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});
const upload = multer({ storage: storage });


//////////-------- ADD---------///////////
const  addAuthor = async (req,res)=>{
    let {name,email,password,profile,bio,isAdmin,posts} = req.body
    let hashedPassword = bcrypt.hashSync(password,10)
    try {
        let author = new Author({
            name,email,password:hashedPassword,profile,bio,isAdmin,posts
        })
        await author.save();
        res.status(200).json({message:"Author Added Successfully",author})
    } catch (error) {
        res.status(400).json({message:"The user cannot be created",err:error.message})
    }
}

//////////-------- UPDATE ---------///////////
const  updateAuthor = (req,res)=>{
    console.log("updateAuthor");
}

//////////-------- DELETE ---------///////////
const  deleteAuthor = (req,res)=>{
    console.log("deleteAuthor");
}

module.exports = {
    addAuthor,
    updateAuthor,
    deleteAuthor
}