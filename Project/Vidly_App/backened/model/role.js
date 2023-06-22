const sequelize = require('../dataBase/connection');
const {Model, DataTypes} = require('sequelize');
const Users = require('./users');

class Roles extends Model{

}

Roles.init({
    role_id :{
        type :DataTypes.INTEGER,
        autoIncrement :true,
        primaryKey:true
    },
    name : {
        type : DataTypes.STRING,
    }
},{
    sequelize,
    modelName:"roles",
    timestamps:false
});

Roles.hasMany(Users,{
    foreignKey : "role",
    sourceKey:"role_id"
})
module.exports =Roles;