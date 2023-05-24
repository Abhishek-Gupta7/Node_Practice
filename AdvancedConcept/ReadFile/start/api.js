const app = require('../app');
const upload = require('../middleware/multer');
const fileReader = require('../middleware/fileReader');

app.post('/file',upload,(req,res) => {
    let path = req.file.path;
    // console.log(path.replace(/[\\]/g,'/'));
    let file = path.replace(/[\\]/g,'/');
    fileReader(file);
    res.send("hello");
});

app.get('/',(req,res) => {
    res.send("home");
});