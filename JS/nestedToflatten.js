//using in built

const arr = [1,2,[3,4],5,[6]];

const arr1 = arr.flat()
console.log(arr1);

function flattenArray(arr){
    let result = [];

    arr.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(flattenArray(element))
        }else{
            result.push(element)
        }
    });
    return result
}

console.log(flattenArray(arr));


