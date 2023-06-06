require('custom-env').env(true);
require('../start/api/homePage');
require('./socket');
const app = require('../app');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');



if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}

let Port = process.env.SERVER_PORT;
app.listen(Port,() => {console.log(`Server listrning on port ${Port}...`);});

app.use(express.static(path.join(__dirname,'../public')));
app.set('view engine','ejs');
app.use(cors());