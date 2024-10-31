function selectionSort(arr){
    let n= arr.length;

    for(let i=0;i<n-1;i++){
        let min = i;

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr;
}

let arr = [1,5,3,2,4]
console.log(selectionSort(arr));
