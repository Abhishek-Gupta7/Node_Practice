require('custom-env').env(true);
const app = require('../app');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
require('./passport');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join('views/html/'));
app.set('view engine','ejs');

app.use(morgan('tiny'));
console.log('here')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))  ;
  app.use(flash());
  console.log('here2')
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
  passport.authenticate('google', { failureRedirect: '/failure', 
  successRedirect : '/success'
},
  )
);

app.get('/success',(req,res)=>{
    // let data = req.user.displayName;
    // console.log('success',data);
    res.render('success')
});

app.get('/logout',async(req,res,next) =>{
  req.logout((err) => {
    if (err) {
      console.log(err);
    }else{
      // res.clearCookie('connect.sid', { expires: new Date(0) });
      console.log(`-------> User Logged out`)
        req.session.destroy((err) => {
          if (err) {
            console.log(' log out error',err);
          }else{
            // res.redirect("https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3001");   
            res.redirect('/');
          }
        });
    }
  });

});


router.get('/logout', (req, res) => {
      console.log(req.session)
      req.logout((err) => {
          if (err) {
              return res.send('Could not log out');
          }
          req.session = null; // Clear the session
          res.redirect('/api/auth/home');
      });
      console.log('logout');
  });
  
  