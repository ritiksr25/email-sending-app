const express = require('express');
const router = express.Router();

//Controller file
const userController = require('../controllers/user_controller');

//login route
router.get('/login', userController.login);
//login callback route route
router.get('/login/callback', userController.loginCallback);
//logout route
router.get('/logout', userController.logout);

//export router
module.exports = router;
