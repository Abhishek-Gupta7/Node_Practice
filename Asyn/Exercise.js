//1.getCustomer   2. getMovies name   3. send Mail

function getCustomer(id){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Reading Custome...");
            resolve({id:1 , name : 'Abhi' , isGold : true , email : 'Email@gmail'});
        }, 2000); 
    })
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log("Reject : ",reject);
    })
}

getCustomer(1);