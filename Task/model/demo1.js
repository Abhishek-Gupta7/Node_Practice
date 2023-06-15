const  { Model, DataTypes} = require('sequelize');
const sequelize = require('../db/connection');
class Demo1 extends Model{

}

Demo1.init({
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
    modelName:'demos1s'
});

module.exports = Demo1;

