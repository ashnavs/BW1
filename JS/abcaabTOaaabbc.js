function sortStrinf(str){

    let arr = []
    for(let i=0;i<str.length;i++){
        arr.push(str[i])
    }

    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    let sortedStr = ""
    for(let i=0;i<arr.length;i++){
        sortedStr += arr[i]
    }
    return sortedStr;
}

let stri = 'abcaab'
console.log(sortStrinf(stri));
