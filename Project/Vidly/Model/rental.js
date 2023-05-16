const Joi = require('joi');
const { boolean } = require('joi');
const mongoose = require('mongoose');

const rentalSchema = mongoose.Schema({
    customer : {
        type : mongoose.Schema({
            _id : {
                type : String,
                required : true
            },
            name : {
                type:String,
                required : true
            },
            isGold : {
                type : Boolean,
                default: false
            },
            phone : {
                type : Number,
                required : true,
                minLength : 10,
                maxLength : 10
            }
        }),
        required : true
    },

    movie : {
        type : new mongoose.Schema({
            title : {
                type : String,
                required : true,
                trim : true,
                maxLength : 20,
                minLength : 2
            },
            dailyRentalRate : {
                type : Number,
                required : true
            }
        }), 
        required : true

    },

    dateOut : {
        type : Date,
        default : Date.now
    },
    dateReturned : {
        type : Date
    },
    rentalFee : {
        type :Number,
        min : 0
    }
});

function validateRental(rental) {
    const Schema = Joi.object({
        customer_id : Joi.string().required(),
        movie_id : Joi.string().required(),
    });

    return Schema.validate(rental);
}
// Create Model 
const Rental = mongoose.model("rental",rentalSchema);

exports.Rental = Rental;
exports.validateRental = validateRental;