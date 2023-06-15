const  { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/connection');
class Demo2 extends Model{

}

Demo2.init({
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name : {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'demos2s'
});

module.exports = Demo2;

