require("custom-env").env(true);
const winston = require('winston');
require('winston-mongodb');
const express = require('express');
const fs = require('fs')
const path = require('path');
const app = express();
const db = require('./Database/db');
const morgan = require('morgan');
const helmet = require('helmet');
const compression  = require('compression');
const logger = require('./Middleware/logger');


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));    
    // console.log("morgan");
}

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
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
const EventEmitter = require("events");



app.use('/',movieRouter);
app.use('/genre',genreRouter);
app.use('/rental',rentalRouter);
app.use('/customer',customerRouter);
app.use('/user',userRouter);
// app.use('/user',loginRouter);

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

// winston.createLogger(
//     new winston.transports.Console(),
//     new winston.transports.File({filename:'handleException.log',level:'info'})
// );

    // winston.ExceptionHandler(
    //     new winston.transports.File({filename:'handleException.log'})
    // );


winston.add(new winston.transports.File({filename:'logFile.log',
    level:'error'
}));
// winston.add(new winston.transports.MongoDB({db:'mongodb://0.0.0.0:27017/Vidly',
//     level:'info',
//     // options:{useUnifiedTopology: true }
// }))

process.on('unhandledRejection',(reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    logger.error(promise,reason);
    process.exit(1);
    // Application specific logging, throwing an error, or other logic here
})
.on('uncaughtException', (err , origin) => {
        logger.error(err.message,err);
        console.log('uncaughtException : ',err,origin);
        fs.writeFileSync('./logs/error.log', `Message:${err.message} Stack:${err}\n`, { flag: 'a' });
        process.exit(1);
})
.on('warning',(e) => {
    console.log("warning : ",e);
})


module.exports = app;
// throw new Error('oops something fail');


const emitter = new EventEmitter()
emitter.setMaxListeners(100)
// or 0 to turn off the limit
emitter.setMaxListeners(0)       