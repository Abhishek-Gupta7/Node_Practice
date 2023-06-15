const {Sequelize} = require('sequelize');

let sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,{
        host :"localhost",
        dialect :"postgres",
        logging:false
    });

try {
    sequelize.authenticate();
    console.log("DataBase Connection Successful!");
} catch (error) {
    console.log("Connection Fail : ",error.message);
}

// sequelize.sync({alter:true})
//     .then(() => {
//         console.log('All Table Sync');
//     })
//     .catch((error) => {
//         console.log('Sync Error :',error);
//     });

module.exports = sequelize;
    