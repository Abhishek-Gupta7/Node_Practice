const mongoose = require('mongoose');

exports.dbConnection = async()=>{
    try {
        await  mongoose.connect('mongodb://0.0.0.0:27017/Vidly')
        console.log("DataBasse Connection is Successful!");
    } catch (error) {
        console.log(error);
    }
}

// mongoose.connect('mongodb://localhost:27017/Vidly')
// .then((result) => {
//     console.log("DataBasse Connection is Successful : ",result);
// })
// .catch((error) => {
//     console.error(error);
// })