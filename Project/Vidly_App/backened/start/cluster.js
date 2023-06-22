const app = require('../app');
const express = require('express');
const cluster = require('cluster');
const os = require('os');
const sequelize = require('../dataBase/connection');

let numCPUS = os.cpus().length - 2;
let Port = process.env.SERVER_PORT || 3001;

try {
    if (cluster.isMaster) {
        // console.log(`Master process ${process.pid} is running`);
        for (let i = 0; i < numCPUS; i++) {
            cluster.fork();
        }
        cluster.on('Exit',(worker,code,signal) => {
            console.log(worker,code,signal);
            console.log(`Worker ${worker.process.pid} died.`);
            cluster.fork();
        });
    }else{
        app.listen(Port,() => {
            console.log(`Server is listening on port ${Port}..`)
        });
    }
} catch (error) {
    console.log('Cluster Error : ',error);
}


// if (cluster.isMaster) {
// //   console.log(`Worker process ${process.pid} started`);
//   // Sync the models with the database
//   sequelize
//     .sync({ alter: true })
//     .then(() => {
//       console.log("Database sync successful");
//     })
//     .catch((error) => {
//       console.error("Database sync failed", error);
//     });
// }