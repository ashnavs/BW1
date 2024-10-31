function bSearchRecursion(arr,target,left=0,right=arr.length-1){
    if(left>right) return -1;
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid]<target) return bSearchRecursion(arr,target,mid+1,right);
    else return bSearchRecursion(arr,target,left,mid-1)
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log(bSearchRecursion(arr,5));
