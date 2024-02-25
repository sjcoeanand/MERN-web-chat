import mongoose from "mongoose";

const UserModel = mongoose.Schema(
    {
        name : {type : String, required : true},
        email : {type : String , required : true},
        password : {type : String, required : true},
        profilePic : {type : String, required : true, default : 'https://icon-library.com/icon/ninja-icon-6.html.html>Ninja Icon # 47482'}
    },
    {
        timeStamps : true
    }
)

const UserMdl = mongoose.model('UserMdl', UserModel);
module.exports = UserMdl;