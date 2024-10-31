const arr = [1,4,3,2]

const target = 4

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
        

    }
    return -1
}

console.log(linearSearch(arr,target));
