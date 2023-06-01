const Financial = require("../model/financial");
const xlsx = require('xlsx')


module.exports = dataToExcel = async(data) => {
    if (!data){ return }
    console.log("Excel ",data);
    // creating work book in so all sheet
    const workBook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(data);

    // Add sheet to the workbook
    xlsx.utils.book_append_sheet(workBook,sheet,"sheet07")
    // creating unique file name
    const timeStamp = Date.now();
    const fileName = `file${timeStamp}.xlsx`;
    const filePath = `dataToExcel/${fileName}`
    // writing to file
    xlsx.writeFile(workBook,filePath);
    console.log(`Excel file generated ${fileName}`);
}