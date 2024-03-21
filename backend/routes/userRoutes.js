const express = require('express');
const {registerUser, authUser} = require('../controllers/userController');
const {notFoundErrors, errorHandler} = require('../middleware/errorMiddleWear')
const router = express.Router();

router.route("/").post(registerUser)
router.use('/login', authUser)
router.use(notFoundErrors)
router.use(errorHandler)




module.exports = router;