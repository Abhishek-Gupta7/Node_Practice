const app = require('../../app');


app.get('/home',async(req,res,next) => {
    res.render('homePage');
})