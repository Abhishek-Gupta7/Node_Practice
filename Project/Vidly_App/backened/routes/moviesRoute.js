const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');

router.get('/',controller.getMovies);
router.post('/newMovie',upload,controller.createMovie)

module.exports = router;
