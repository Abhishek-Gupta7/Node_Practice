const reader = require('xlsx');

module.exports = fileReader = async(file) => {
    let readData = reader.readFile(file);
    // console.log(readData);
    let data = [];
    const sheet = readData.SheetNames;
    for (let i = 0; i < sheet.length; i++) {
        const temp = reader.utils.sheet_to_json(readData.Sheets[readData.SheetNames[i]]);
        temp.forEach((val) => {
            data.push(val);
        })
        
    }
    console.log(data);
}