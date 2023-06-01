const app = require('../app');
const upload = require('../middleware/multer');
const fileReader = require('../middleware/fileReader');
const fileFieldData = require('../middleware/fileFieldData');
const Financial = require('../model/financial');
const data_to_excel = require('../middleware/data_to_excel');

app.post('/file',upload,async(req,res) => {
    let path = req.file.path;
    // console.log(path.replace(/[\\]/g,'/'));
    let file = path.replace(/[\\]/g,'/');
    // console.log(file);
    // let data = await fileFieldData(file);
    let data = await fileReader(file);
    console.log(data);
    // let result = await Financial.bulkCreate(data);
    // console.log(result);
    res.send("hello");
});

app.get('/file',async(req,res,next) => {
    let result = await Financial.findAll({attributes:{exclude:['id','createdAt','updatedAt']}});
    let data = [];
    result.forEach(element => {
        data.push(element.dataValues);
    });
    // let excel = await data_to_excel(data);
    // res.send(data);
});

app.get('/',(req,res) => {
    res.send("home");
});
