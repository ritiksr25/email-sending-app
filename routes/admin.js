const express = require('express');
const router = express.Router();

//Controller file
const adminController = require('../controllers/admin_controller');

//admin dashboard route
router.get('/', adminController.index);
//users management
router.get('/users', adminController.users);
router.post('/users/status/:id', adminController.changeStatus);
//admin settings routes
//router.get('/settings', adminController.settings);
//router.post('/settings/update/:id', adminController.updateSettings);

//export router
module.exports = router;
