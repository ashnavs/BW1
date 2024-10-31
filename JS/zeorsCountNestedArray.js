// function countZeros(arr){
//     let count = 0;

//     for(let i=0;i<arr.length;i++){
//         let element = arr[i];

//         if(typeof element === 'object' && element.length !== undefined){
//             count += countZeros(element)
//         }else if(element === 0){
//             count++
//         }
//     }
//     return count
// }

function countZeros(arr){
    let count = 0;

    arr.forEach(element => {
        if(Array.isArray(element)){
            count += countZeros(element)
        }else if(element === 0){
            count++
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

console.log(countZeros(nestedArray))