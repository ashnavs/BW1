function countUp(n, curr=1){
    if(curr>n){
        return
    }
    console.log(curr);
    countUp(n, curr+1)
    
}

countUp(5)