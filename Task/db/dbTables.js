const sequelize = require('./connection');
const demo1 = require('../model/demo1');
const demo2 = require('../model/demo2');

const db = {};

db.sequelize = sequelize;
db.demo1 = demo1;
db.demo2 = demo2;

db.sequelize.sync({alter:true})
    .then(() => {
        console.log('All table sync');
    })
    .catch((error) => {
        console.log('Sync error',error);
    })

module.exports = db;