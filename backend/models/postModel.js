const mongoose=require('mongoose');
const postschema=new mongoose.Schema(
    {
        "userId":{
            type:String,
            required:true
        },
        "Title":{
            type:String,
            required:true,
            unique:true
        },
        "Content":{
            type:String,
            required:true,
            unique:true
        },
        "Image":{
            type:String
        },
        "Category":{
            type:String
        },
        "Views":{
            type:Number,
            default:0
        },
        "Likes":{
            type:String,
            default:0
        }
    },{timestamps: true}
)
const Post=mongoose.model('Post',postschema);
module.exports=Post;
