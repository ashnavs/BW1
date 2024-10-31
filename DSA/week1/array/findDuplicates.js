// const arr = [1,2,3,1,5,3]

// function findDup(arr){
//     let result = []
//     let seen = {}

//     for(let i=0;i<arr.length;i++){
//         if(seen[arr[i]]){
//             result.push(arr[i])
//         }else{
//             seen[arr[i]] = true
//         }
//     }
//     return result
// }

// console.log(findDup(arr));


function kthLargest(arr, k) {
    let rs = arr.sort((a, b) => b - a);  // Sort array in descending order
    console.log(rs);
    
    return rs[k - 1];
}

let arr = [3, 2, 1, 5, 6, 4];
console.log(kthLargest(arr, 2));  // Output: 5
