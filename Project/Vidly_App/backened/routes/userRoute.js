const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const upload = require('../middleware/imageUpload');

router.post('/customers/newCustomer',upload,controller.createNewUser);

router.get('/customers',controller.viewUsers);

router.post('/customers/customer',controller.customer);

module.exports = router;