const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { User, userSchema } = require('../Model/user');

exports.loginUser = async(req,res) => {
    try {
        console.log(req.body);
        let {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user) return res.status(400).send("Invalid email or Password.");

        const isValidPassword = await bcrypt.compare(password,user.password);
        if (!isValidPassword) return res.status(400).send("Invalid email or Password.");

        let token = user.generateToken();
        console.log(token);
        res.header("jwt-token",token);
        res.status(200).send(_.pick(user,['_id','name','email']))

    } catch (error) {
        console.log("Error : ",error.message);
        res.status(500).send(error.message);
    }
}