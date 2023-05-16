const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()) 

// app.use(function(req,res,next){
//     console.log("Logging !");
//     next();
// });
// app.use(function(req,res,next){
//     console.log("Authentication!");
//     next();
// });

const courses = [
    {id:1,name:'B.Sc.IT'},
    {id:2,name:'CS'},
    {id:3,name:'BMS'}
];
app.get('/',(req,res) => {
    res.send('Hello World!!');
});

                 //POST
try {
    app.post('/api/courses',(req,res) => {
        const schema = Joi.object({
            name:Joi.string().min(3).max(10).required(),
            password:Joi.string().min(8).required()
        });
        
        const result = schema.validate(req.body);
       
        console.log(result);
        if(result.error){
            res.status(400).send(result.error.details[0].message); 
            return;
        }
        const course = {
            id:courses.length + 1,
            name:req.body.name
        };
        courses.push(course);
        res.send(course);   
    });
    
} catch (error) {
    console.log('Error is : ',error);
    res.send(error);
}

                         //PUT METHOD
app.put('/api/courses/:id',(req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course does not found with such id!");
        return;
    }

    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    course.name = req.body.name;
    console.log(course.name);
    res.send(course)
})

function validateCourse(course){
    const schema = Joi.object({
        name:Joi.string().min(3).max(10).required()
    });
    
    return schema.validate(course);
}

                           //delete
    app.delete('/api/courses/:id',(req,res) => {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if(!course){
            res.status(404).send("Course not found with such id!");
            return;
        } 


        const index = courses.indexOf(course);
        courses.splice(index,1);

        res.send(course);

    });


app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //console.log(course);
    if(!course) res.status(404).send("Course Does Not Found Witrh such Id");
    res.send(course);
});

                                   //PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on Port ${port}.....`));
console.log("hello");


