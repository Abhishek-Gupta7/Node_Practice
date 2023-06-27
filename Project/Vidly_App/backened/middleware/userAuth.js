const jwt = require('jsonwebtoken');
const Users = require('../model/users');

module.exports = async(req,res,next) => {
    let bearer = req.headers.bearer;
    jwt.verify(bearer,process.env.JWT_SECRET,(err,verify)=>{
        if (err) {
            // console.log('Jwt : ',err);
            res.status(401).send(err.message);
        }else{
            if (verify) {
                let {id , email , role} =  verify.data;
                req.userData = verify.data;
                // console.log(role);
                let user = Users.findOne({where : {email:email}})
                if (user) {
                    next();
                }else{
                    res.status(401).send("Invalid token!");
                }
            }
        }
    });
    
    
}

// if (verify) {
//     let {id , email} =  verify.data;
//     // console.log(email);
//     let user = Users.findOne({where : {email:email}})
//     if (user) {
//         next();
//     }else{
//         res.status(401).send("Invalid token!");
//     }
// }