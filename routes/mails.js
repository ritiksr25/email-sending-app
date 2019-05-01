const express = require('express');
const router = express.Router();

//Controller file
const mailController = require('../controllers/mail_controller');

//Index route
router.get('/send', mailController.send);

//export router
module.exports = router;
