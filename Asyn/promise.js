// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve(1);  // pending => resolve,fulfilled
//     //reject(new Error(' Message..')); // pending => reject
//     },2000);
// })
// p
//     .then((result => console.log('Result :',result)))
//     .catch((err => console.log('Error :',err.message)))


            /*      ***************************             */

console.log("Before.");
 
function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Reading user from database...");
            resolve({id : id , UserName:'Abhi'});
        },2000);
    })     
}

function getRepositories(name){  
    return new Promise((resolve,reject) => {
        setTimeout(()=>{    
            console.log(name,'your repositories.')                 
            //resolve(['repo1', 'repo2' , 'repo3' , 'repo4']);
            reject(new Error());
        },2000);
    });    
}
// const repo = getRepositories(user);
// console.log(repo.then((result => console.log(result))))

function getCommits(repo){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log(repo);
            console.log('Calling Api.');
            resolve(['commits']);
        },2000);
    })    
}

// getUser(1)
//  .then((user => getRepositories(user.UserName)))
//  .then(repos => getCommits(repos))
//  .then(commit => console.log('Commits : ',commit))
//  .catch(err => console.log('Error : ',err.message));

                   //<<<<Asyn And Await>>>>>>
async function display(){
    try{
     const user = await getUser(1);
     const repos = await getRepositories(user.UserName);
     const commit = await getCommits(repos);
     console.log(commit);
    }
    catch(error){
        console.log(error);
    }
        
    }

display();

/*             ******............*********...........*****        */
      //<<<<<<<<<<settled promise>>>>>>>>>>>
// const p = Promise.resolve({id:1});
// p.then(result => console.log(result));

// const pr = Promise.reject(new Error('Error : '));
// pr.catch(err => console.log(err));

/*        ***********..........***************..............******       */
    //<<<<<<<<<<Running Promise In Parallel>>>>>>>>>>
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//        console.log('Aysn Operation 1..');
//        resolve(1); 
//     }, 2000);
// } );

// const p2 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//        console.log('Aysn Operation 2..');
//        reject(new Error('Something Went Wrong!')); 
//     }, 2000);
// } );

// Promise.race([p1,p2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


