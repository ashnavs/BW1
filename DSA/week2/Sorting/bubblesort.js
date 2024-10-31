function bubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

let arr = [1,4,2,3]
console.log(bubbleSort(arr));
