const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACKURL,
    passReqToCallback:true
},function(req,accessToken,refreshToken,profile,done){
    console.log(profile);
    return done(null,profile);
}
));

passport.serializeUser(function(user,done){
    done(null,user);

});

passport.deserializeUser(function(user,done) {
    done(null,user);
})