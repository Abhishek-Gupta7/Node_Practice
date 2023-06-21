const bcrypt = require('bcrypt');

module.exports = async(password) => {
    const salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(password,salt);
    return newPassword;
}