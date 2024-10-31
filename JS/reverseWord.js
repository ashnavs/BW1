function reverseWord(str){
    let result = "";
    let word = "";
    let words = [];

    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            if(word.length>0){
                words.push(word)
                word = "";
            }
        }else{
            word += str[i]
        }
    }

    if(word.length>0){
        words.push(word);
    }

    for(let i=words.length-1;i>=0;i--){
        result += words[i];
        if(i>0){
            result += ' '
        }
    }
    return result;
}

const stri = 'Hello World'
console.log(reverseWord(stri));
