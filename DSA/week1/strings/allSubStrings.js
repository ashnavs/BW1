function allSubStrings(str){
    let subStrings = [];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            subStrings.push(str.slice(i,j))
        }
    }
    return subStrings;
}

console.log(allSubStrings('abc'));
