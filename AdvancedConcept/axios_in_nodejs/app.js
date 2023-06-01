const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());




let PORT = process.env.SERVER_PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}..`);
})

async function makeRequest() { 
    let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.post('http://localhost:3000',payload) 
    console.log(res.data); 
} 

makeRequest();

app.post('/',(req,res,next) => {
    console.log(req.body);
    let arrID = ['1','2','3','4'];
    res.send(arrID);
})
