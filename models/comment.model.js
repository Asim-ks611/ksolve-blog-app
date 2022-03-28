const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:1
    },
    email:{
        type:String,
        match:/.+\@.+\..+/,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    comment:{
        type:String,
        required:true,
        trim:true,
        minLength:1
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }, 
})

// Connects Author Schema to the "Author" collection of MongoDB 
const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment,commentSchema