const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:1,
        unique:true,
    },
    slug:{
        type:String,
        match:/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        required:true,
        unique:true,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }],
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }, 

})

// Connects Author Schema to the "Author" collection of MongoDB 
const Category = mongoose.model('Category',categorySchema);

module.exports = Category,categorySchema