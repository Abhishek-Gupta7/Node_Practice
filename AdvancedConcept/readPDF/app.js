const pdf = require('pdf-parse');
const fs = require('fs')

let file = fs.readFileSync('./Vidly - Requirements.pdf');

pdf(file).then((result) => {
    console.log(result.info);
    console.log(result.text);
})