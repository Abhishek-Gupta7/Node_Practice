const Permission = require('../model/permission');


module.exports = async(req,res,next) => {
    let {role} = req.userData;
    console.log(req.method,req.url,req.originalUrl);
    let access = await Permission.findOne({where :{
        role_id : role,
        method : req.method,
        path : req.url,
        url : req.originalUrl
    }});
    console.log(access);
    if (access !== null) {
        next();
    }else{
         next(new Error("Permission Dinied"));
    }
}