const {Model , DataTypes} = require('sequelize');
const sequelize = require('../dataBase/connection');


class Users extends Model{

}

Users.init({
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    firstName : {
        type :DataTypes.STRING,
        validate : {
            len : {
                args : [2 , 20],
                msg : 'FirstName must be 2 or 20 character.'
            }
        },
        allowNull:false
    },
    lastName : {
        type :DataTypes.STRING,
        validate : {
            len : {
                args : [3 , 20],
                msg : 'LastName must be 3 or 20 character.'
            }
        },
        allowNull:false
    },
    email : {
        type :DataTypes.STRING,
        allowNull : false,
        unique : true,
        validate: {
            isEmail : {
                msg:"Invalid email."
            }
        }
    },
    phone : {
        type:DataTypes.STRING,
        unique:true,
        allowNull : false,
        validate : {
            isNumeric : 'Please enter number only',
            len :{
                args : [10],
                msg : 'Number must contain 10 digit.'
            }
        }
    },
    profileImage:{
        type :DataTypes.STRING,
        allowNull:true,
        
    },
    role :{
        type :DataTypes.STRING,
    }
},
{
    sequelize,
    modelName :'users',
    timestamps:false
});

module.exports = Users;