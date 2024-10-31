function isPrime(num){
    if(num<2) return false

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

function sumOfPrimes(limit){
    let sum=0;

    for(let i=2;i<=limit;i++){
        if(isPrime(i)){
            sum += i
        }
    }

    return sum;
}

let limit = 8
console.log(sumOfPrimes(limit));
