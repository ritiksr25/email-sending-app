const express = require('express');
const router = express.Router();

//Controller file
const mailController = require('../controllers/mail_controller');

//send emails
router.get('/', mailController.send);
router.post('/', mailController.sendProcess);
//view emails
router.get('/view', mailController.view);
router.get('/view/:id', mailController.viewOne);

//export router
module.exports = router;
