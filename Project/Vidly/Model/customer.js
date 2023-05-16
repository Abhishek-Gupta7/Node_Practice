const Joi = require('joi');
const mongoose = require('mongoose');


const customerSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    isGold : {
        type :Boolean,
        default : false
    },
    phone :{
        type : Number,
        required : true,
        minLength : 10,
        maxLength : 10
    }
});


const Customer = mongoose.model('customer',customerSchema);

function validateCustomer(cust) {
    const Schema = Joi.object({
        name : Joi.string().min(2).required(),
        isGold : Joi.boolean(),
        phone : Joi.number().required()
    })

    return Schema.validate(cust);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;