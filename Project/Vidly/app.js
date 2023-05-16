require("custom-env").env(true);
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
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    console.log(err.message);
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
});

process.on('uncaughtException',(error) => {
    console.log(error.message);
} )

module.exports = app;
