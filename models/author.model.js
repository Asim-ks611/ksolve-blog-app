const mongoose = require("mongoose")
// const {isEmail} = require('validator');

const authorSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minLength: [3, 'Name must be more than 3 letters'],
        maxLength: 25
    },
    email:{
        type:String,
        match:/.+\@.+\..+/,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true 
    },
    profile:{
        type:String,
    },
    bio:{
        type:String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }],
})

///// ----- Virtuals ----- /////
// 1.) A virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
// 2.) To include virtuals in res.json(), you need to set the toJSON schema option to { virtuals: true }
// 3.) here we will create id as virtual from _id to work our server with every application.(as personal reference)

// authorSchema.virtual('id').get(()=> this._id)
// authorSchema.set('toJSON',{virtuals:true})

// Connects Author Schema to the "Author" collection of MongoDB 
const Author = mongoose.model('Author',authorSchema);

module.exports = Author,authorSchema


