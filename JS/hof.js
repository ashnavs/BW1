//eg:1 HOF that takes a function as an argument.

function greet(name){
    return `Hello ${name}`
}

function hof(name,callback){
    return callback(name)
}

console.log(hof('Ashna',greet));


//eg:2 HOF that returns a function

function multiplyBy(factor){
    return function(number){
        return number * factor
    }
}

const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(5));

const multiplyByFive = multiplyBy(5)
console.log(multiplyByFive(5));


