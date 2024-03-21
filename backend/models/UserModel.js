// import mongoose from "mongoose";
const mongoose = require('mongoose');
const bcrypt1 = require('bcryptjs');
const UserModel = mongoose.Schema(
    {
        name : {type : String, required : true},
        email : {type : String , required : true, unique: true},
        password : {type : String, required : true},
        profilePic : {type : String, default : 'https://icon-library.com/icon/ninja-icon-6.html.html>Ninja Icon # 47482'}
    },
    {
        timeStamps : true
    }
)

UserModel.methods.matchPassword = async function(enteredPasswd){
    return await bcrypt1.compare(enteredPasswd, this.password)
}

UserModel.pre('save', async function (next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt1.genSalt(10)
    this.password  = await bcrypt1.hash(this.password, salt)
})

const UserMdl = mongoose.model('users', UserModel);
module.exports = UserMdl;