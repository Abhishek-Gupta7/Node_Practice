const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');

router.post('/login',controller.login);

router.post('/customers/newCustomer',upload,controller.createNewUser);

router.get('/customers',authUser,controller.viewUsers);

router.post('/customers/customer',controller.customer);

module.exports = router;