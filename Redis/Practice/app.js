const express = require('express');
const Redis = require('redis');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let PORT = process.env.SERVER_ORT || 3000;
app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}...`);
})
// let client;
// async function createClient(){
//     client = Redis.createClient();
//     await client.connect();
// }
// createClient();

    let client = Redis.createClient();
        client.connect().then((res) => {
        console.log('Redis connection successful');
        })
        .catch((error) => {console.log('redis error : ',error);});


app.get('/getphotos',async(req,res,next) => {
    try {
        let photos = await client.get('photos');
        if (photos != null) {
            console.log(JSON.parse(photos));
            console.log('Pick data from redis..');
            return res.json(JSON.parse(photos));
        }

        let data = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log(data.data);
        console.log('Data from url');
        let putDataRedis = await client.set("photos",JSON.stringify(data.data));
        console.log(putDataRedis);
        res.json(data.data);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
})
