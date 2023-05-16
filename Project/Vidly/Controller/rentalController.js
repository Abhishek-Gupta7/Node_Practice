const { default: mongoose } = require("mongoose");
const { Customer } = require("../Model/customer");
const Movies = require("../Model/movies");
const { validateRental, Rental } = require("../Model/rental");
const session = mongoose.startSession();

exports.getRental = async(req,res) => {
    try {
            //console.log(req.body);
        const {error} = validateRental(req.body);
            //console.log("Error ",error);
        if (error) return res.status(400).send(error.message);
        // check object id
        if (!isValidObjectId(req.body.customer_id,res)) return;
        if (!isValidObjectId(req.body.movie_id,res)) return;
        // check customer
        const customer = await Customer.findById(req.body.customer_id);
        console.log("Customer : ",customer.name);
        if (!customer.name) return res.status(400).send("Customer not found.")
        // check movie
        const movie = await Movies.findById(req.body.movie_id);
        console.log(movie.movie_name);
        if (!movie.movie_name) return res.status(400).send("Movie not found.")
        const rental = new Rental({
            customer : {
                _id  : customer._id,
                name : customer.name,
                phone : customer.phone
            },
            movie : {
                title : movie.movie_name,
                dailyRentalRate : movie.dailyRentalPrice
            }
        });

        const result = (await session).withTransaction(async() => {
                rental.save();
                movie.numberInStock --;
                movie.save();
                console.log(result);
        });
        (await session).endSession();
        res.status(200).send(result);
    } catch (error) {
        console.log("Error : ",error.message);
        res.status(500).send(error.message);
    }
}

function isValidObjectId(id,res) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) { 
        res.status(501).send("Invalid Id") 
        return false;
}else return true;
}