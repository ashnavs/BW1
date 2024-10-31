//bubble sort
let arr = [4,5,2,3,1];

function bubbleSort(arr){
    let n = arr.length;

    for(let i=0;i<n;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));


//insertion sort
function insertionSort(arr){
    let n  = arr.length;

    for(let i=1;i<n;i++){
        let ce = arr[i]
        let j = i-1;

        while(j>=0&&arr[j]>ce){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = ce
    }
    return arr
}

console.log(`insertion:${insertionSort(arr)}`);

//selection sort
function selectionSort(arr){
    let n = arr.length;

    for(let i =0;i<n-1;i++){
        let min = i

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr;
}

console.log(`selection:${selectionSort(arr)}`);



//quick sort
function quickSort(arr){
    if(arr.length<2){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = []
    let right = [];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(`quicksort:${quickSort(arr)}`);

//merge sort
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr = []
    while(left.length>0&&right.length>0){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return sortedArr.concat(left,right)
}

console.log(`merge:${mergeSort(arr)}`);






