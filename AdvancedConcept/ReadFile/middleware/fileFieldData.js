const reader = require('xlsx');
const Financial = require('../model/financial');

module.exports = fileFieldReader = async(file) => {
    let readData = reader.readFile(file);
    // console.log(readData);
    let data = [];
    let cellExtract = ['B','C','E','G'];
    const sheet = readData.SheetNames[0];
    for (let i = 0; i < sheet.length; i++) {
        let  desireField = {};
        const desireSheet = readData.Sheets[readData.SheetNames[i]];
        if(!desireSheet) break;
        let range = reader.utils.decode_range(desireSheet['!ref']);
            for (let i = range.s.r + 1; i < range.e.r; i++) {
                
                for(let cell of cellExtract){
                        let cellName = desireSheet[`${cell}${1}`].v;
                        // console.log(cellName); 
                        // const cellAddress = reader.utils.encode_cell({ r: i, c: i });
                        let cellAddress = `${cell}${i}`;
                        desireField[`${cellName}`] = desireSheet[cellAddress].v;
                        // console.log("Row",desireField);
                        data.push(desireField);
                }
            }
    }
    // console.log(data);
    // let result = await Financial.bulkCreate(data);
    // console.log(result);
    return data;
}

// for(let i = range.s.r + 1 ; i <= range.e.r ; i++){
//     const desireField  = desireSheet[`B${i}`].v;
//     console.log("Column",desireField);
// }


// temp.forEach((val) => {
        //     data.push(val);
        // })

// console.log('desireSheet',desireSheet);
// const temp = reader.utils.sheet_to_json(readData.Sheets[readData.SheetNames[i]]);
