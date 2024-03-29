const jwt = require('jsonwebtoken');

module.exports = async(data) => {
    const token = await jwt.sign({data:data},process.env.JWT_SECRET,{expiresIn : '70m'});
    return token;
}