const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Signup route
router.post('/signup', userController.signup);
//SignIn route
router.post('/signin', userController.signin);

module.exports = router;
