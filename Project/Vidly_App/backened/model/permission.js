const { Model, DataTypes } = require('sequelize');
const  sequelize = require('../dataBase/connection');
const { hasMany } = require('./movies');
const Roles = require('./role');

class Permission extends Model{

}

Permission.init({
    p_id : {
        type : DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey : true
    },
    role_id : {
        type : DataTypes.INTEGER  
    },
    method : {
        type:DataTypes.STRING
    },
    path : {
        type : DataTypes.STRING,
    },
    url : {
        type : DataTypes.STRING
    }

},{
    sequelize,
    modelName : 'permissions',
    timestamps : false
});

module.exports = Permission;
