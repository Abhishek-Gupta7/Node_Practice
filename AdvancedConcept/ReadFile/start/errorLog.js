
process.on('uncaughtException',(err , origin) => {
    console.log('uncaughtException : ',err);
    console.log('uncaughtException at : ',origin);
    
})