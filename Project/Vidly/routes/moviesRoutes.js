const express = require('express');
const router = express.Router();
const controller = require('../Controller/moviesController');

router.post('/insertMovie',controller.insertMovie);
router.get('/',controller.getMovie);

module.exports = router;