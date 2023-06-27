const Movies = require('../model/movies');
const service = require('../services/movieService');

exports.getMovies = async(req,res,next) => {
    try {
        console.log('Request :',req.url,req.method,req.originalUrl);
        let result  = await Movies.findAll({attributes : {exclude :['createdAt','updatedAt']}});
        res.send(result);
    } catch (error) {
        console.log('Movie error : ',error);
        next(error);
    }
}

exports.createMovie = async (req,res,next) => {
    try {
        // console.log(result);
        // let result = await Movies.create(data);
        // console.log(result.dataValues);
        // res.send(result)
        let data = req.body;
        let result = await service.insertMovie(req,data);
        console.log(result.dataValues);
        res.send(result)
    } catch (error) {
        console.log('Movie error : ',error);
        next(error);
    }
}