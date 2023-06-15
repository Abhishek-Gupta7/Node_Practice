const service = require('../services/userService');


exports.createNewUser = async(req,res,next) => {
    try {
        let result = await service.insertUser(req,req.body);
        console.log(result);
        res.send(result)
    } catch (error) {
        next(error);
        console.log('user error',error);
    }
}

exports.viewUsers = async(req,res,next) => {
    try {
        console.log(req.body);
    } catch (error) {
        next(error);
        console.log('user error',error);
    }
}

exports.customer = async(req,res,next) => {
    try {
        let {phone} = req.body;
        let result = await service.viewUser(phone);
        console.log(result);
        res.send(result);
    } catch (error) {
        next(error);
        console.log('user error',error);
    }
} 