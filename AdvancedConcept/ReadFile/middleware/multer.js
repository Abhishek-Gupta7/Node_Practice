const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'./public/excelFile/')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});


module.exports = upload = multer({
    storage:multerStorage,
    // fileFilter: function (req,file,callback) {
    //     let  arrayExts = ['.jpg','.jpeg','.gif','.png','.wiff','.svg','.WebP'];
    //     let ext = path.extname(file.originalname);
    //     console.log(ext);
    //     if (arrayExts.includes(ext)) {
    //         return callback(null,true)
    //     }
    //     callback(new Error('Only images are allowed'))
    // }
}).single('file');