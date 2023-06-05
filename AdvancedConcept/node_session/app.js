require('custom-env').env(true);
const express = require('express');
const session = require('express-session');
const generateOtp = require('generate-otp');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized:true,
    cookie : {secure : false , maxAge : 20000}
}));


let port = process.env.PORT || 8888;
app.listen(port,() => {
    console.log(`Server is listening on port ${port}...`);
});

app.get('/',async(req,res,next) => {
    res.send('Hi');
});


app.get('/getOtp',async(req,res,next) => {
    let otp = generateOtp.generate(6);
    req.session.otp = otp;
    res.send(otp);

});

app.post('/verifyOtp',async(req,res,next) => {
    let {userOtp} = req.body;
    console.log(userOtp);
    console.log(req.session.otp);
    if(userOtp === req.session.otp){
        return res.send('verified!')
    }
    return res.send('Session expire')
});