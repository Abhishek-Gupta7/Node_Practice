const express = require('express');
const path = require('path');
const app = express();

// console.log(path.join(__dirname,'../public'));
app.use(express.static(path.join(__dirname,'../public')));
let Port = process.env.SERVER_PORT || 8000
app.listen(Port,() => console.log(`Server listening on ${Port}`));

app.set('view engine','ejs');

app.get('/',(req,res,next) => {
    let data = {email : 'amy@gmail.com',
    phone:3873763737,
    address:'xyz',
    skills : ['Node','React','Java']
}
    res.render('index',{
        name:'Amy',
        data:data
    });
    // res.send("Hellooooo")
})