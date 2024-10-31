const isValid = function(s){
    let stack = [];

    let obj = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }

    for(let char of s){
        if(char in obj){
            stack.push(char)
        }else{
            let top = stack.pop()
            if(char !== obj[top]){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid('[]'));
