function isPlaindrome(str){
    if(str.length<=0) return true
    if(str[0]!== str[str.length-1]) return false
    return isPlaindrome(str.slice(1,-1));
}

console.log(isPlaindrome('malayalam'));
console.log(isPlaindrome('ashna'));

