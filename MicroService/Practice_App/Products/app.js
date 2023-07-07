const express = require('express');

const app = express();

app.use(express.json());

let Port = process.env.SERVER_PORT || 3002;

app.listen(Port,() => {console.log(`Products is running on port `)});

app.get('/',async(req,res,next) => {
    res.status(200).send('Products listening')
})