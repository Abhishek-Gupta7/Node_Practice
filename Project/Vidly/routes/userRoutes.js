const express = require('express');
const router = express.Router();
const authWare = require('../Middleware/auth');
const adminWare = require('../Middleware/admin');
const controller = require('../Controller/userController');
const image = require('../Middleware/multer');
const trycatchHandler = require('../Middleware/trycatchHandler');



router.post('/insertUser',image.upload,controller.insertUser);

router.get('/',authWare.auth,adminWare.isAdmin,trycatchHandler(controller.getUser));

module.exports = router;