const winston = require('winston');

module.exports = function(err,req,res,next){
    console.log(req.url);
    console.log("Error Handler : ",err);
    winston.error(err.message,err);
    res.status(500).send('something went wrong..');
}