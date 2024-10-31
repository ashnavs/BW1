// // reverse the array input [435, 524]
// // output should be [425, 534]
function reverse(arr){
    const result = arr.map(num=>{
        return parseInt(num.toString().split('').reverse().join(''))
    })
    return [result[1],result[0]]
}

const arr = [435,524]
console.log(reverse(arr));




