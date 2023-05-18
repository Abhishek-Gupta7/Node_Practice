require("custom-env").env(true);
const winston = require('winston');
require('winston-mongodb');
const express = require('express');
const path = require('path');
const app = express();
const db = require('./Database/db');
const morgan = require('morgan');

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));    
    // console.log("morgan");
}

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')))
// Connecting to database
const dbConnection = db.dbConnection;
    dbConnection();

// Routes
const movieRouter = require('./routes/moviesRoutes');
const genreRouter = require('./routes/genreRoutes');
const rentalRouter = require('./routes/rentalRoutes');
const customerRouter = require('./routes/customerRoutes');
const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');
const errorHandler = require('./Middleware/error');
const { info } = require("console");


app.use('/',movieRouter);
app.use('/genre',genreRouter);
app.use('/rental',rentalRouter);
app.use('/customer',customerRouter);
app.use('/user',userRouter);
// app.use('/user',loginRouter);


winston.add(new winston.transports.File({filename:'logFile.log'}));
winston.add(new winston.transports.MongoDB({db:'mongodb://0.0.0.0:27017/Vidly',level:'info'}))
// For incorrect output
app.all('*',(req,res) => {
    res.status(404).send(`Page not found. ${req.originalUrl} not found`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     winston.error(err.message,err);
//     res.locals.message = err.message;
//     console.log(err.message);
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.send({"Error :":err.message});
// });
app.use(errorHandler);
winston.createLogger(
    new winston.transports.File({filename:'handleException.log'})
);
process.on('unhandledRejection',(error) => {
    console.log('unhandledRejection',error.message);
    throw error;
} )
throw new Error('generat')
module.exports = app;
