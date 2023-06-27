const { NUMBER } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("../model/users");
const convertToUrl = require("../utils/convertImageUrl");
const hashPassword = require("../utils/hashPassword");
const path = require("path");
const Users = require("../model/users");
module.exports = {
  insertUser,
  viewUserByPhone,
  checkUser,
};

async function insertUser(req, data) {
  // converting imagepath to url
  let image = convertToUrl(req.file.path);
  let { firstName, lastName, email, password, phone } = data;
  // Hashing password
  password = await hashPassword(password);

  let result = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    profileImage: image,
  });
  return result;
}

async function checkUser(data) {
  let { email, password } = data;
  let user = await Users.findOne({ where: { email: email } });
  let { id, role } = user.dataValues;
  if (user) {
    let hashPassword = (
      await Users.findOne({ where: { email: email }, attributes: ["password"] })
    ).dataValues.password;
    // console.log('hash password : ',hashPassword);
    let match = await bcrypt.compare(password, hashPassword);
    if (match) {
      return { id, role, email };
    } else {
      return false;
    }
  } else {
    return false;
  }
}

async function viewUserByPhone(number) {
  if (NUMBER(number)) {
    if (number.length === 10) {
      let user = await User.findOne({ where: { phone: number } });
      return user;
    } else {
      throw new Error("Number must contain 10 digit..");
    }
  } else {
    throw new Error("Please enter number..");
  }
}
