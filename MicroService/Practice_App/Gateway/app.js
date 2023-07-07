const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use(express.json());

let Port = process.env.SERVER_PORT || 3000;

app.listen(Port,() => {console.log(`Gateway is running on port `)});

app.use('/customers',proxy('http://localhost:3001'));
app.use('/',proxy('http://localhost:3002'));
app.use('/shoppings',proxy('http://localhost:3003'));
