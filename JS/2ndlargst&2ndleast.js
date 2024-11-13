//step1: remove duplicates

function findArr(arr){
    let uniqueArr = [];

    for(let i=0;i<arr.length;i++){
        let isDup = false;
        for(let j=0;j<uniqueArr.length;j++){
            if(arr[i]===uniqueArr[j]){
                isDup = true;
                break
            }
        }
        if(!isDup){
            uniqueArr.push(arr[i])
        }
    }
    
    let least = uniqueArr[0];
    let highest = uniqueArr[0];

    for(let i=1;i<uniqueArr.length;i++){
        if(uniqueArr[i]<least) least = uniqueArr[i];
        if(uniqueArr[i]>highest) highest = uniqueArr[i];
    }

    let secondLeast = highest;
    for(let i=0;i<uniqueArr.length;i++){
        if(uniqueArr[i]>least && uniqueArr[i]<secondLeast){
            secondLeast = uniqueArr[i]
        }
    }

    let secondHighest = least;
    for(let i=0;i<uniqueArr.length;i++){
        if(uniqueArr[i]<highest && uniqueArr[i]>secondHighest){
            secondHighest = uniqueArr[i]
        }
    }

    return {secondLeast,secondHighest}
}

const arr = [1,4,3,6,5,2,7,5,6,7,9]
const result = findArr(arr)
console.log('secondLeast:',result.secondLeast);
console.log('secondHighest:',result.secondHighest);


