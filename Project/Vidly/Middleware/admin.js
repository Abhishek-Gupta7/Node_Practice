const jwt = require('jsonwebtoken');

exports.isAdmin = async(req,res,next) => {
    try {
        console.log("isAdmin : ",req.user.isAdmin);
        if(!req.user.isAdmin) return res.status(403).send("Forbidden");
        next();
    } catch (error) {
        console.log("Error is : ",error.message);
        return res.status(400).send(error.message);
    }
}