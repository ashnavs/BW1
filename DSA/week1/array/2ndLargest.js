function secondLargest(arr){
    let sl= -Infinity ;
    let high = -Infinity
    for(let i=0;i<arr.length;i++){
       if(arr[i]>high){
        sl=high
        high = arr[i]
       }else if(arr[i]>sl && arr[i]<high){
            sl = arr[i]
        }
    }
    return sl === -Infinity ? null : sl;
}

const arr = [1,2,4,3,5,8,10,6]
console.log(secondLargest(arr));
