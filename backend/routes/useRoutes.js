const express = require('express');

const customRouter = express.Router();

customRouter.post('/login', authorizeUser)
customRouter.route('/').post(()=> {})

module.exports = customRouter;