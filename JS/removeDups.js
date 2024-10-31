function removeDup(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let isDup = false;

        for(let j=0;j<newArr.length;j++){
            if(arr[i]===newArr[j]){
                isDup = true
                break;
            }
        }

        if(!isDup){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const array = [1,2,3,2,5,4,5,7,8,7]
console.log(removeDup(array));



