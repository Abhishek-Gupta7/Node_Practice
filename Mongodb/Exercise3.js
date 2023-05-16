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
    .find({$or :[{name : /.*Jack.*/i}] , $and : [{price : {$eq :12 }}] })
    //.or([{name : /.*by.*/i}])
    //.and([ { $or : [{price : {$eq :12 }}, {price : {$eq :10}}] } ])
    //.and([{isPublished : true} , {price : {$gte : 15 }}])
    .sort('name')
    .select({name : 1 , author : 1 , price : 1});
}
async function run(){
    const result = await getData();
    console.log(result);
}
run();

//{$and : [{isPublished : true} , {price : {$gte : 15 }}]}
// in operator => {price : {$in : [12,10]}}