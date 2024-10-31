function firstNonRepeating(arr){
    let map = {}
    for(let i=0;i<arr.length;i++){
        map[arr[i]] = (map[arr[i]] || 0) +1
    }
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]===1){
            return arr[i]
        }
    }
    return null;
}

let arr = [9, 4, 9, 6, 7, 4];
console.log(firstNonRepeating(arr));

