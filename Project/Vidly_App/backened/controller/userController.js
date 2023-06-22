const Users = require('../model/users');
const service = require('../services/userService');
const generateToken = require('../utils/generateToken');

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

exports.login = async(req,res,next) => {
    try {
        let {email} = req.body;
        let result = await service.checkUser (req.body);
        if (result){
            let token = await generateToken(result);
            res.header("bearer",token)
            // console.log(token);
            res.send('login')
        }else{
            res.status(401).send('login fail')
        }

    } catch (error) {
        next(error);
        console.log('user error',error);
    }
}

exports.viewUsers = async(req,res,next) => {
    try {
        let users = await Users.findAll({attributes :{exclude:['password','role']}});
        console.log(users);
        res.send(users);
    } catch (error) {
        next(error);
        console.log('user error',error);
    }
}

exports.customer = async(req,res,next) => {
    try {
        let {phone} = req.body;
        let result = await service.viewUserByPhone(phone);
        console.log(result);
        res.send(result);
    } catch (error) {
        next(error);
        console.log('user error',error);
    }
} 