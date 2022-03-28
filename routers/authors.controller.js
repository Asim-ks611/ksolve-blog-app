const mongoose = require("mongoose")
const Authors = require("../models/author.model")


//////////-------- ADD---------///////////
const  addAuthor = (req,res)=>{
    console.log("addAuthor");
    // async function createUser(req,res){
    //     try {
    //      const author = new Author({
    //          name:"xyz",
    //      })
    //      await author.save(req,res)
    //      console.log(author)
    //     } catch (error) {
    //         console.log("Error:",error.message);
    //     }
    //  }
    res.status(200).json({message:"addAuthor"})
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