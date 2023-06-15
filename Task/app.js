const express = require('express');
require('custom-env').env(true);
const db = require('./db/dbTables');
const morgan = require('morgan');
const app = express();
// const sequelize = require('./db/connection');
const Demo1 = require('./model/demo1');
const Demo2 = require('./model/demo2');

app.use(morgan('tiny'));
app.use(express.json());

let port = process.env.SERVER_PORT || 3000;
app.listen(port,() => {
    console.log(`Server is listening on ${port} port..`);
})

async function insert(){
    try {
        let result1 = await Demo1.create({name :'Abhi'});
        let result2 = await Demo2.create({name :'Abhi'});
        console.log(result1.dataValues,result2.dataValues);
    } catch (error) {
        console.log(error);
    }
}
insert();

app.get('/delete',async(req,res,next) => {
    // let {sequelize,...newDb } = db;
    // console.log(newDb);
    // for (const key in db) {
    //         if (key === 'sequelize') {
    //             continue;
    //         }
    //         console.log(key);
    //         deleteDB(key);
    // }
    let model  = db.sequelize.models;
    console.log('Modal',model);
    
    res.send('hi');
})

async function deleteDB(table){
 
    // await sequelize.query('TRUNCATE TABLE public."demos1s", public."demos2s" RESTART IDENTITY;');
    // let data1 = await db.demo1.destroy({where:{}});
    // let data2 = await db.demo2.destroy({where:{}});
    let result = await db[table].destroy({where:{}});
    console.log('DataBase drop');

}
