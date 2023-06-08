require('./cluster');
require('../dataBase/connection');
require('./api');

const app = require('../app');
const express = require('express');
const morgan = require('morgan');

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
