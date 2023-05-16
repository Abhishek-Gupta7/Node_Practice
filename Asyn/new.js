console.log("hi 2");
setTimeout(() => {
    console.log("hi");
});

Promise.resolve("Promise")
    .then((p)=>{console.log(p);})