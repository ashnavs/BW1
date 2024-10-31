function merge(arr1,arr2){
    let result = []
    let i=0;let j=0;

    while(arr1.length&&arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i++])
        }else{
            result.push(arr2[j++])
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
    }

    while(j<arr2.length){
        result.push(arr2[j])
    }

    return result
}


const arr1=[1,2,3]
const arr2 = [4,5,6]
console.log(merge(arr1,arr2));
