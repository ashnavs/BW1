//Array.isArray
// function countZeros(arr){
//     let count = 0;

//     arr.forEach(element => {
//        if(Array.isArray(element)){
//         count += countZeros(element)
//        }else if(element === 0){
//         count++
//        }
//     });

//     return count;
// }

//using loop
function countZeros(arr){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        let element = arr[i]

        if(typeof element === 'object' && typeof element.length !== undefined){
            count += countZeros(element)
        }else if(element===0){
            count++
        }
    }

    return count
}


const array = [1,0,9,[0,4,5,0],[0]]

console.log(countZeros(array));
