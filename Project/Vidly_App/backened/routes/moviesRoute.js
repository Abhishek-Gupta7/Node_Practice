const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');

router.get('/',controller.getMovies);
router.post('/newMovie',controller.createMovie)

module.exports = router;
