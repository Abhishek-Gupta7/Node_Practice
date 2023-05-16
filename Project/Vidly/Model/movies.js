const mongoose = require('mongoose');
const { genreSchema } = require('./genre');


const moviesSchema = new mongoose.Schema({
    movie_name : {
        type:String,
        required :true,
    },
    genre : {
        type : genreSchema,
        required : true,
    },
    numberInStock : {
        type : Number,
        required:function() {
            return this.isRealse;
        },
        min : 0,
    },
    dailyRentalPrice : {
        type : Number,
        required : function() {
            return this.numberInStock;
        }
    }
});

// Creating a model
const Movies = mongoose.model('movie',moviesSchema)

module.exports =  Movies;
