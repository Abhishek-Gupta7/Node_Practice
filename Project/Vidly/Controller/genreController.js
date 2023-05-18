const {Genre} = require('../Model/genre');

exports.insertGenre = async(req,res) => {
    try {
        console.log(req.body);
        let {error} = req.body;
        if(error) return res.status(400).send(error.message);
        if(!req.body.movie_type) return res.status(404).send("No data found");

        let {movie_type} = req.body;
        let genre = new Genre({
            movie_type
        });

        let result = genre.save();
        console.log("result",result);
        res.status(200).send("Genre Inserted");
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getGenre = async(req,res,next) => {
    
    next(new Error('could not get data'));
    
    // try {
    //     const result = await Genre.find();
    //     console.log(result);
    //     if (!result) return res.status(400).send("Opps! No Genre found.");
    
    //     res.status(200).send(result);
    // } catch (error) {
    //     console.log(error.message);
    //     res.status(500).send(error.message)
    // }

}