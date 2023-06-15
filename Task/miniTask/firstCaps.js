function capitalFirstLetter(s){
    let newName;
    if (typeof s === 'string') {
        newName = s.trim()[0].toUpperCase() + s.slice(1).toLowerCase();
    }
     return newName;
}

console.log(capitalFirstLetter('ABHISHEK'));