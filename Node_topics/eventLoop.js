console.log('ji');
setTimeout(() => {
    console.log(1);
}, 0);
setTimeout(() => {
    console.log(2);
    process.nextTick(() => {
        console.log('tick');
    });
    Promise.resolve().then(() => {
        console.log('promise');
    })
}, 0);
setTimeout(() => {
    console.log(3);
}, 0);
