const multer = require('multer');
const path = require('path');
const sharp = require('sharp');

const multerStorage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'./public/images');
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + '-'+ file.originalname);
    }
});


exports.upload = multer({
    storage: multerStorage,
    fileFilter : function (req,file,callback) {
        let  arrayExts = ['.jpg','.jpeg','.gif','.png','.wiff','.svg','.WebP'];
        let ext = path.extname(file.originalname);
        console.log(ext);
        if (arrayExts.includes(ext)) {
            return callback(null,true)
        }
        callback(new Error('Only images are allowed'))
    }
}).single('photo');


exports.sharp = async(req,file,next) => {
    // if (!req.file) return next();
    // try {
    //     let f = await sharp(file)
    //     .resize(200,200)
    //     .toFormat('jpeg')
    //     .jpeg({quality:90})
    //     .toFile(`./public/images/movie/${file.fieldname + '-' + Date.now() + '-'+ file.originalname}`);

    // file = f;        
    // console.log("sharp :",f);
    // next();
    // } catch (error) {
    //     console.log("Sharp err:",error.message);
    // }
    
}