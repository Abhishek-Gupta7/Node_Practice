const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.info('Connected to Database...'))
    .catch(err => console.error('Failed to connect to database..',err));

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : {type : Date , default : Date.now},
    ispublished : Boolean
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course1 = new Course({
        name : 'Angular',
        author : 'Abhi',
        tags : ['JavaScript','Angular','FrontEnded',],
        ispublished : true,
        price :15000
    });    
    const result = await course1.save();
    console.log(result);
}
//createCourse();

async function getCourses(){
    const pageNumber = 2;
    const pageSize = 10;
    const courses = await Course
    .find({author:"Abhi"})
    //.skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({name : 1})
    //.count()
    .select({name:1,tags:1});
   // console.log(courses);
}
//getCourses();

/*              ***********Comparison Oprator*************               */
// eq => equal to
// ne => not equal
//gt => greater than
//gte => greater than and equal
//lt => less than
//lte => less than equal
//in 
//nin => not in

// find({price : {$gte : 10 , lte : 20}})
// find({price : {$in : [10,15,20]}})