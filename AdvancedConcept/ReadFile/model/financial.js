const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/dbConnection");


class Financial extends Model{

}

Financial.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    country: {
        type:DataTypes.STRING,
        allowNull:false
    },
    product:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    unit_sold:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    sale_price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},
{
    sequelize,
    modelName:'financials'
}
);

module.exports = Financial;

Financial.sync({alter:true})
    .then((result) => {
        console.log("Financial Table Sync...");
    })