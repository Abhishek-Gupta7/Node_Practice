const express = require('express');

const app = express();

app.use(express.json());

let Port = process.env.SERVER_PORT || 3001;

app.listen(Port,() => {console.log(`Customer is running on port `)});

app.use('/',async(req,res,next) => {
    res.status(200).send('Customer listening')
})