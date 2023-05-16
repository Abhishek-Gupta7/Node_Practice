const Joi = require('joi');
const mongoose = require('mongoose');


const genreSchema = new mongoose.Schema({
    movie_type : {
        type:String,
        required :true,
    }
});

function validateGenre(genre) {
    const Schema = {
        movie_type : Joi.string().min(3).max(50).required(),
        movie_rating : Joi.number().min(0).max(5).required()
    }
    return Joi.valid(genre,Schema);
}

// Creating a model
const Genre = mongoose.model('genre',genreSchema)

exports.Genre =  Genre;
exports.genreSchema = genreSchema;
exports.validateGenre = validateGenre;