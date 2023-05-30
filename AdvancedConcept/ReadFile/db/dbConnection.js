const {Sequelize} = require('sequelize');

const sequelizeConnection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
    host:'localhost',
    dialect:'postgres',
    logging:false
});

try {
    sequelizeConnection.authenticate();
    console.log('Data base connection successful.');
} catch (error) {
    console.log(`Fail to connect to database Error : ${error}`);
}

module.exports = sequelizeConnection;

sequelizeConnection.sync({alter:true})
    .then(() => {
        console.log('All table sync');
    })
    .catch((error) => {
        console.log('Error is : ',error);
    })