require('custom-env').env(true);
require('./errorLog');
const app = require('../app');
const api = require('./api');
const morgan = require('morgan');
const express = require('express');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/public',express.static('./public'))

const Port = process.env.SERVER_PORT || 3000
app.listen(Port,() => {
    console.log(`Server listening on port ${Port}....`);
})


