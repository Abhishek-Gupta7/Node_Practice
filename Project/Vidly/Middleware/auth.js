const jwt = require('jsonwebtoken');

exports.auth = async(req,res,next) => {
    try {
        let token = req.header("jwt-token");
        if(!token) return res.status(400).send("Access denied");
        let user = jwt.verify(token,process.env.jwtSecret);
        console.log("user :",user);
        req.user = user;
        next();
    } catch (error) {
        console.log("Error is : ",error.message);
        return res.status(400).send(error);
    }
}