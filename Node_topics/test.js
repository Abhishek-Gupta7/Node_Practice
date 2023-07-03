console.log(1);
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {console.log('immediate');})
setInterval(() => {
    console.log('interval');
}, 0);
process.nextTick(() => console.log('next'))
console.log('2');
console.log(1);
console.log(2);