const { Model , DataTypes} = require('sequelize');
let sequelize = require('../dataBase/connection');


class Movies extends Model {

}

Movies.init({
    movieId:{
        type :DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    movieName:{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            len :{
                args : [2 , 20],
                msg :'First name must 2 or 20 character.' 
            }
        }
    },
    barCode :{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            len :{
                args : [10,10],
                msg :'Barcode must be of 10 character.' 
            }
        }
    },
    stock : {
        type :DataTypes.INTEGER,
        allowNull :false,
        validate :{
            isNumeric : {
                msg :'Please enter number only.'
            }
        }
    },
    rating : {
        type : DataTypes.DECIMAL,
        validate : {
            isvalidRating(value){
                if (value < 0 || value > 5) {
                    throw new Error('Please enter rating in between 0 to 5.')
                }
            }
        }
    },
    rate : {
        type : DataTypes.INTEGER,
        validate : {
            isNumeric :{
                msg :'Please Enter number.'
            },
            min : {
                args : 40,
                msg : 'Minimum cost is $40'
            },
            max : {
                args : 120,
                msg : 'Maximum cost is $120.'
            }
        }
    }
},
{
    sequelize,
    modelName :'movies'
});

module.exports = Movies;

