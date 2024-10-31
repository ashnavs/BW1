//eg:1 Functions can be stored a s variables

const greet = function(name){
    return `Hello ${name}`
}

console.log(greet('Ashna'));


//eg:2 Passed as Arguments to Other Functions

function process(name,callback){
    return callback(name)
}

function greets(name){
    return `Hello ${name}`
}

console.log(process('Ashna',greets));
