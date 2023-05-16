const express = require('express');
const router = express.Router();
const controller = require('../Controller/rentalController');

router.post('/',controller.getRental);


module.exports = router;