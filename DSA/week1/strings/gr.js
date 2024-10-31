//find extra char in str1 which is not in str2

function extraChar(str1,str2){
    let charCount = {};
    for(let char of str2){
        charCount[char] = (charCount[char]||0) + 1
     }

     for(let char of str1){
        if(!charCount[char]){
            return char
        }else{
            charCount[char]--
        }
     }
     return null
}

console.log(extraChar('abcd','abc'));
