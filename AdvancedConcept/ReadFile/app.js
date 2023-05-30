const express = require('express');
const app = express();
module.exports = app;

require('./start/server');
require('./db/dbConnection');
require('./model/financial');


