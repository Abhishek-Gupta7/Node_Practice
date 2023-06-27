const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');

router.get('/',controller.getMovies);
router.post('/newMovie',authUser,upload,controller.createMovie)

module.exports = router;
