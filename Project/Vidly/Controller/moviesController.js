const { Genre } = require('../Model/genre');
const Movies = require('../Model/movies');
const Joi = require('joi');


exports.insertMovie = async(req,res,next) => {
    try {
        let {error} = req.body;
        if (error) return res.status(400).send(error.message);
        console.log(req.body);
        let {movie_name,genre_id,numberInStock,dailyRentalPrice} = req.body;
        let genre = await Genre.findById(genre_id);
        if (!genre) return res.status(400).send("Genre not found")
        let movie = new Movies({
            movie_name ,
            genre : {
                _id : genre._id,
                movie_type : genre.movie_type
            },
            numberInStock,
            dailyRentalPrice,
        });
        const result = await movie.save();
        console.log(result);
        res.send('movieInserted')
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getMovie = async(req,res,next) => {
    
    const result = await Movies.find()
    res.send(result);
}