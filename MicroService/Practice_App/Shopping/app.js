const express = require('express');

const app = express();

app.use(express.json());

let Port = process.env.SERVER_PORT || 3003;

app.listen(Port,() => {console.log(`Shopping is running on port `)});

app.get('/shoppings',async(req,res,next) => {
    res.status(200).send('Shopping listening')
})