const app = require('../app');
const movieRoutes = require('../routes/moviesRoute');
const express = require('express');

app.use(express.json());
app.use('/vidly/movies',movieRoutes);
// app.use('/vidly/register');


app.use(async(err,req,res,next) => {
    if (err) {
        res.send(err.message);
        console.log('Error handler ',err);
        // process.exit(1);
    }
});


