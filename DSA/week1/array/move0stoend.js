function moveZeros(arr){
    let nonZeroIndex = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex++] = arr[i]
        }
    }

    while(nonZeroIndex<arr.length){
        arr[nonZeroIndex++] = 0;
    }
    return arr
}

const arr = [0,1,0,3,12]
console.log(moveZeros(arr));
