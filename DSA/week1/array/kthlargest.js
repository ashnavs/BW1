function kthLargest(arr,k){
    arr.sort((a,b)=>b-a)
    return arr[k-1]
}


let arr = [3,2,1,5,6,4]
console.log(kthLargest(arr,4));
