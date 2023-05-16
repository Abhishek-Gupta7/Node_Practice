const config = require('config');
//ServerName 
const serverName = config.get('name');

const mongoose =  require('mongoose');
//connecting to database 
mongoose.connect(serverName)
    .then(() => {console.log('Connected to database..')})
    .catch(err => { console.log('failed to connect : ',err )});

const excersie_schema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : {type : Date , default : Date.now},
    isPublished : Boolean,
    price : Number
}); 

//creating model
const Course = new mongoose.model('course',excersie_schema);

async function getData(){
    return await Course
    .find({$and : [{isPublished : false} , {$or : [{tags : 'frontend'} , {tags : 'backend'}]}]})
    .sort('-price')
    .select({name : 1 , author : 1 , price : 1});
}
async function run(){
    const result = await getData();
    console.log(result);
}
run();

//{$in : ['frontend' , 'backend']};