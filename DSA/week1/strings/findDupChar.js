let str = 'ashna'

function dupChars(str){
    let charCount = {}
    let dups = []

    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char in charCount){
        if(charCount[char] > 1){
            dups.push(char)
        }
    }
    return dups


}


console.log(dupChars('malayalam'));
