require('custom-env').env(true);
require('../dataBase/connection');
require('./cluster');
require('../dataBase/db');
require('./api');

const app = require('../app');
const express = require('express');
const morgan = require('morgan');

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
