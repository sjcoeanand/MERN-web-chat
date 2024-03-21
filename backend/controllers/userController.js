// const express = require('express');
const asyncHandler = require('express-async-handler');
const User =  require('../models/UserModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {

    // check if any value is empty
    const {name, email, password, profilePic} = req.body
    if(!name || !email || !password ){
        res.status(401);
        throw new Error('Please Enter all fields');
    }

    //  userExist logic
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(401);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name, email, password, profilePic
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Failed to create User')
    }
})

const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid Id Password entered")
    }
})

module.exports = {registerUser, authUser}