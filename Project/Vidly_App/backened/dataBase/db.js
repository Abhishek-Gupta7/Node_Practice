const db = require('../model/index');
const sequelize = require('./connection');
const cluster = require('cluster');


if (cluster.isMaster) {
    //   console.log(`Worker process ${process.pid} started`);
    // Sync the models with the database
    sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database sync successful");
    })
    .catch((error) => {
        console.error("Database sync failed", error);
    });
}

module.exports = db;
