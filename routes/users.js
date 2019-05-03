const express = require('express');
const router = express.Router();

//Controller file
const userController = require('../controllers/user_controller');

//login route
router.get('/login', passport.authenticate('google', {scope: ['profile', 'email']}));
//login callback route route
router.get('/login/callback', passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
    res.redirect('/');
  });
//logout route
router.get('/logout', userController.logout);
//user profile
router.get('/profile', userController.profile);
//sample messages routes
router.get('/samples/add', userController.addMessage);
router.post('/samples/add/:id', userController.addMessageProcess);
router.get('/samples/update/:id', userController.updateMessage);
router.post('/samples/update/:id', userController.updateMessageProcess);
router.get('/samples/delete/:id', userController.deleteMessage);

//export router
module.exports = router;
