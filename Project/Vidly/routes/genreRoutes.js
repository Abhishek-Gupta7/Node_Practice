const express = require('express');
const router = express.Router();
const controller = require('../Controller/genreController');

router.post('/insertGenre',controller.insertGenre);
router.get('/',controller.getGenre);

module.exports = router;