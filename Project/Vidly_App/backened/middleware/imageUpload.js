const multer = require('multer');
const path = require('path');

const multerStorage = multer.diskStorage({
    destination : (req,file,callBack) =>{
        callBack(null,'./public')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage : multerStorage,
    fileFilter : (req,file,callback) => {
        let arrayExtension = ['.jpg','.jpeg','.gif','.png','.wiff','.svg','.WebP'];
        let extension = path.extname(file.originalname);
        if (arrayExtension.includes(extension)) {
            return callback(null,true);
        }
        callback(new Error(`File with extension ${JSON.stringify(arrayExtension)} are allowed..`));
    }
}).single('image');

module.exports = upload;