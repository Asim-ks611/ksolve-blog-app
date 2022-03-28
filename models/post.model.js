const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minLength:1
    },
    slug:{
        type:String,
        match:/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        required:true,
        unique:true
    },
    excerpt:{
        type:String,
        required:true,
        minLength:1,
        trim:true
    },
    content:{
        type:String,
        required:true,
        minLength:1,
        trim:true
    },
    image:{
        type:[String],
    },
    featuredPost:{
        type:Boolean,
        default:false
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
        required:true
    }],
    categories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }],
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:true
    },
})

// Connects Author Schema to the "Author" collection of MongoDB 
const Post = mongoose.model('Post',postSchema);

module.exports = Post,postSchema