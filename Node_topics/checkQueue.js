// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("File read..");
//   setImmediate(() => {
//     console.log("Immediate inside file read");
//   });
// });

// process.nextTick(() => {
//   console.log("Process nextTick");
// });

// Promise.resolve().then(() => {
//   console.log("Promise resolve");
// });

// setTimeout(() => {
//   console.log("Set time out..");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate..");
// });


// setImmediate(() => {console.log('Immediate 1');});
// setImmediate(() => {
//     console.log('Immediate 2');
//     process.nextTick(() => {console.log('NextTick 1');});
//     Promise.resolve().then(() => {
//         console.log('Promise');
//     })
// });
// setImmediate(() => {console.log('Immediate 1');});

setTimeout(() => {
    console.log('SetTimeout');
}, 0);

setImmediate(() => {console.log('Immediate');})