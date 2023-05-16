const expres = require('express');
const Joi = require('joi');
const app = expres();

app.use(expres.json());
          //Connecting server or port
const port = process.env.PORT || 3000
app.listen(port , ()=>{ console.log(`"Listening on port ${port}..."`)});

          //movies collection
const movies = [
    {   id : 1,
        movieName : "Krish",
        type : "Fictional"
    },
    {   id : 2,
        movieName : "kho na Pyaar hai",
        type : "Romantic"
    },
    {   id : 3,
        movieName : "Jai Ho!",
        type : "Action"
    },
    {   id : 4,
        movieName : "Raaz 3",
        type : "Horror"
    }
]

             //    Request for Customer 
   //to get all customer details
app.get('/api/vidly',(req,res) => {
    //res.send("Vidly movie\n");
    res.send(movies); 
});

    //to get specific customer details
app.get('/api/vidly/:id',(req,res) => {
    const customer = movies.find(c => c.id === parseInt(req.params.id));
    console.log(customer);
    if(!customer){
        res.status(404).send("Movie Not Found!");
    }
    res.send(customer);
});

           //to create new movie 
try {
    app.post('/api/vidly',(req,res) => {
        const schema = Joi.object({
            movieName : Joi.string().min(1).max(15).required(),
            type : Joi.string().min(5).max(10).required()
        });

        const result = schema.validate(req.body);
        if(result.error){
            res.status(500).send(result.error.details[0].message);
            return;
        }

        //console.log('post method');   
        const newMovie = {
            id : movies.length + 1,
            movieName : req.body.movieName,
            type : req.body.type,
        }
        console.log(newMovie);
      movies.push(newMovie);
      res.send(newMovie);
    
    });
    
} catch (error) {
    console.log("Error is :",error);
    res.send(error);
}