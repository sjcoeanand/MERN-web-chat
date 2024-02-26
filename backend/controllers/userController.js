const express = require('express');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async() => {
    const {name, email, password, confirmPassword} = req.body
    if(!name || !email || !password || !confirmPassword){
        req.status(400);
        throw new Error('Please Enter all fields');
    }

    // const userExist = wa
})