function findArr(arr){
    let uniqueArr =[]

    for(let i=0;i<arr.length;i++){
        let isDup = false;
        for(let j=0;j<uniqueArr.length;j++){
            if(arr[i] === uniqueArr[j]){
                isDup = true
                break
            }
        }
        if(!isDup){
            uniqueArr.push(arr[i])
        }
    }

    
}