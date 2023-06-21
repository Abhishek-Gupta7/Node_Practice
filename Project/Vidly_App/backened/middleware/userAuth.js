const jwt = require('jsonwebtoken');
const Users = require('../model/users');

module.exports = async(req,res,next) => {
    let bearer = req.headers.bearer;
    let verify = jwt.verify(bearer,process.env.JWT_SECRET);
    let {id , email} = verify.data;
    console.log(email);
    let user = Users.findOne({where : {email:email}})
    if (user) {
        next();
    }else{
        throw new Error("Invalid token!")
    }
    
}
