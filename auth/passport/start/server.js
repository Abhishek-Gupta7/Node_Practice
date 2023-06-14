require('custom-env').env(true);
const app = require('../app');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session')
require('./passport');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join('views/html/'));
app.set('view engine','ejs');

app.use(morgan('tiny'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))  
  app.use(passport.session());
  app.use(passport.initialize());


let Port = process.env.SERVER_PORT || 3001;
app.listen(Port,() => {
    console.log(`Server is listening on port ${Port}`);
});

app.get('/',async(req,res,next) => {
    res.render('home')
});

app.get('/google',passport.authenticate('google',{scope : ['profile','email']}));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/failure', successRedirect : '/success' })
);

app.get('/success',(req,res)=>{
    let data = req.session.userData;
    console.log(data);
    res.render('success')
})