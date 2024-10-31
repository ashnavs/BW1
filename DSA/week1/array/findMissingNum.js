function findMissingNum(arr,n){
    let total = (n*(n+1))/2;
    let sum = arr.reduce((acc,num)=>acc+num,0)
    return total-sum;
}

const arr = [1,2,4,5,6]
console.log(findMissingNum(arr,6));
