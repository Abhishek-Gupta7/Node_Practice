const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');

router.get('/',controller.getMovies);
router.post('/newMovie',authUser,checkPermission,upload,controller.createMovie)

module.exports = router;
