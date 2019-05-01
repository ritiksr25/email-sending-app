const express = require('express');
const router = express.Router();

//Controller file
const adminController = require('../controllers/admin_controller');

//admin dashboard route
router.get('/', adminController.index);
//admin view users route
router.get('/users', adminController.users);
//admin settings routes
router.get('/settings', adminController.settings);
router.post('/settings/update/:id', adminController.updateSettings);
//admin sample messages routes
router.get('/samples/add', adminController.addMessage);
router.post('/samples/add', adminController.addMessageProcess);
router.get('/samples/update/:id', adminController.updateMessage);
router.post('/samples/update/:id', adminController.updateMessageProcess);
router.get('/samples/delete/:id', adminController.deleteMessage);

//export router
module.exports = router;
