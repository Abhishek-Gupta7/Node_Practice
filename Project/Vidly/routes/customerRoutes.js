const express = require('express');
const router = express.Router();
const controller = require('../Controller/customerController');

router.post('/insertCustomer',controller.insertCustomer);
router.get('/',controller.getCustomer);


module.exports = router;