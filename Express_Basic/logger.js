// class Logger{
//      log(req,res,next){
//         console.log("Logging!...");
//         next();
//     };

//      authen(req,res,next){
//         console.log("Authentication!...");
//         next();
//     }
// }
// module.exports = Logger;
// //module.exports = authen;

function log(req,res,next){
    console.log("Logging!...");
    next();
};

 function authen(req,res,next){
    console.log("Authentication!...");
    next();
}

module.exports = {log,authen};