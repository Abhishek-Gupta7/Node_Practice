const cron = require('node-cron');


let task = cron.schedule('* * * * * *',() =>{
    console.log('Cron is run');
});

task.start();
setTimeout(() => {
    task.stop();
}, 7000);