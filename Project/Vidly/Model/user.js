const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name :{
        type : String,
        min : [2,"Name must contain atleast 2 characters.."],
        pattern : /A-Za-Z/,
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        max : 8
    },
    image : {
        type : String
    },
    isAdmin : {
        type:Boolean,
    }
})

userSchema.methods.generateToken = function () {
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},process.env.jwtSecret);
    return token;
}

// creating model
const User = mongoose.model('user',userSchema);


exports.User = User;
exports.userSchema = userSchema;

exports.validateUser = (user) => {
    const Schema = Joi.object({
        name : Joi.string().min(2).required().pattern(/[A-Za-z]$/i),
        email: Joi.string().required().email(),
        password : Joi.string().min(8).required(),
    })
    return Schema.validate(user);
}