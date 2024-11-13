function countZero(arr){
    let count = 0;

    arr.forEach(element => {
        if(Array.isArray(element)){
            count += countZero(element)
        }else if(element===0){
            count ++
        }
    });
    return count
}

let nestedArray = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 1, [0]],
    [1, 1, 0, 0]
]

console.log(countZero(nestedArray));
