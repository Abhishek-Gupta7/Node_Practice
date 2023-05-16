const express = require('express');
const router = express.Router();
const controller = require('../Controller/loginController');

router.post('/loginUser',controller.loginUser);

// router.get('/',controller.getUser);

module.exports = router;