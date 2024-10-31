function rotatesArray(arr,k){
    let n = arr.length
    k = k % n;
    let rotatedArr = [];

    for(let i=n-k;i<n;i++){
        rotatedArr.push(arr[i])
    }

    for(let i=0;i<n-k;i++){
        rotatedArr.push(arr[i])
    }

    return rotatedArr;
}

console.log(rotatesArray([1,2,3,4,5],2));
