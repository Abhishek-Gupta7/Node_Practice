console.log("Before.");
 getUser(1 , getDetails);

function getDetails(user){
    console.log(user);
    getRepositories(user,getRepositoriesDetails)
}

function getRepositoriesDetails(res){ 
    console.log(res); 
    getcommits(res,displayCommits);
}

 function displayCommits(commits){
     console.log(commits);
 }
 function getcommits(repo){
     setTimeout(()=>{
         displayCommits('commits');
     },2000);
 }

console.log("After.");



function getUser(id , callback){
    setTimeout(()=>{
        console.log("Reading user from database...");
        callback({id : id , UserName:'Abhi'});
    },2000);   
}

function getRepositories(user,callback){
    setTimeout(()=>{
        console.log(user.UserName,'your repositories.')
        callback(['repo1', 'repo2' , 'repo3' , 'repo3']);
    },2000);
}