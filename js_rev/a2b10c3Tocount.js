function countString(str){
    let result =''
    let i=0;

    while(i<str.length){
        let char = str[i]
        i++

        let numStr = ''
        
        while(i<str.length && !isNaN(str[i])){
            numStr += str[i]
            i++
        }

        let count = parseInt(numStr)

        for(let j=0;j<count;j++){
            result += char
        }
    }

    return result
}

let stri = 'a1b10c3'
console.log(countString(stri));
