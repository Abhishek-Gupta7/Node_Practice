const Movies = require('../model/movies');

exports.getMovies = async(req,res,next) => {
    try {
        let result  = await Movies.findAll({attributes : {exclude :['createdAt','updatedAt']}});
        res.send(result);
    } catch (error) {
        console.log('Movie error : ',error);
        next(error);
    }
}

exports.createMovie = async (req,res,next) => {
    try {
        let data = req.body;
        let result = await Movies.create(data);
        console.log(result.dataValues);
        res.send(result)
    } catch (error) {
        console.log('Movie error : ',error);
        next(error);
    }
}