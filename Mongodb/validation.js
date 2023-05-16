const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.info('Connected to Database...'))
    .catch(err => console.error('Failed to connect to database..',err));

const courseSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true,
        minlength : 7,
        maxlength : 20,
        trim : true
        //match : /a-z/i
    },
    category : {
        type : String,
        required : true,
        enum : ['web','mobile','network'],
        lowercase : true

    },
    author : {
        type : String ,
        uppercase : true
    
    },
    tags : {
        type : Array,
        validate : {
            isAsync : false,

            // validator : function(v){
            //     return v && v.length > 0;
            // }
            validator : function (v , callback = (result) =>{console.log(result);}) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                    return result;                
                }, 1000);              
            }
        },
        message : "A Course Should have Atleast one tag."
    },
    date : {type : Date , default : Date.now},
    ispublished : Boolean,
    price : {
        type : Number ,
        required : function() { return this.ispublished; },
        get : p => Math.round(p),
        set : p => Math.round(p)
    }
    
});

const Course = mongoose.model('Course',courseSchema);


async function createCourse(){

        const course1 = new Course({
            name : 'Flutter',
            category : '-',
            author : 'Bill Gates',
            //tags : ['JavaScript','Angular','FrontEnded'],
            ispublished : true,
            price :9999.50
        });  
        try {
        //await  course1.validate((err) => console.log(err));
        const result = await course1.save();
        console.log(result);
        }
    catch (ex) {
        console.log("Custom Error !",ex.message);
        //console.log(ex.error.tags);
        // for (const field in ex) {
        //    console.log("Custom Error : ",ex[field].message);
        // }
        while(ex.hasNext()){
            console.log(ex.message.next());
        }
    }
}
createCourse();

// const arr = [1,4,5,3,10,7];
// const result = arr.sort((a,b) => a-b);
// console.log(result);


