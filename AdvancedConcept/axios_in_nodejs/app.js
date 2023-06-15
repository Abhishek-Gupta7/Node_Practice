const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());




let PORT = process.env.SERVER_PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}..`);
})

async function makeRequest() { 
    // let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.get('http://fakeapi.com') 
    console.log(res.data); 


} 

makeRequest();

app.get('/',async (req,res,next) => {
    let arrID = ['1','2','3','4'];
    for (let id of arrID) 
    let res = await axios.get('http://fakeapi.com/') 
    res.send(arrID);
})
