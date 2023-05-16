const express = require('express');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const appDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')

app.set('view engine','pug');
app.set('view','./views');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());


console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
console.log(`App ${app.get('env')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    appDebugger("Morgan Enabled!");
}

           //db work
dbDebugger('Connected to DataBase!');

// //           **** using class method  ****
//const Logger = require('./logger');
// const logger = new Logger();
// app.use(logger.log);
// app.use(logger.authen);
             /*    *** using multiple function ****   */
const logger = require('./logger');
app.use(logger.log);
//app.use(logger.authen);



// app.use(function(req,res,next){
//     console.log("Authentication!...");
//     next();
// });

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}...`)});

const courses = [
    {id:1,name:'B.Sc.IT'},
    {id:2,name:'CS'},
    {id:3,name:'BMS'}
];

app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.post('/api/courses',(req,res)=>{
    const {error} = validateCourse(req.body);
    

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id:courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({
        name : Joi.string().min(3).max(15).required()
    });
    console.log(schema.validate(course));
    return schema.validate(course);
}


            /*      ****Config****       */
console.log(`Application name ${config.get('name')}`);
console.log(`Mail server ${config.get('mail.host')}`);
console.log(`Mail password ${config.get('mail.password')}`);
