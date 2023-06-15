const { NUMBER } = require('sequelize');
const User = require('../model/users');
const url = require('../utils/convertImageUrl');
const path = require('path');
module.exports = {
    insertUser,
    viewUser
}

async function insertUser(req,data) {
    let image = url(req.file.path);
    let {firstName,lastName,email,phone} = data;
    let result = await User.create({
        firstName,
        lastName,
        email,
        phone,
        profileImage:image
    });
    return result;
}

async function viewUser(number){
    if(NUMBER(number)){
        if(number.length === 10){
            let user = await User.findOne({where : {phone : number}});
            return user;
        }else{
            throw new Error('Number must contain 10 digit..');
        }
    }else{
        throw new Error('Please enter number..');
    }
}