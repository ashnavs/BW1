//inbuilt
// function largestSubstring(str){
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     let result = ''
//     let currSubstring = ''

//      for(let i=0;i<str.length;i++){
//         if(!vowels.includes(str[i])){
//             currSubstring += str[i]
//         }else{
//             if(currSubstring.length > result.length){
//                 result = currSubstring
//             }
//             currSubstring = ''
//         }
//      }
//      if(currSubstring.length>result.length){
//         result = currSubstring
//      }

//      return result
// }

// let str = 'hellotherebeautifulworld';
// console.log(largestSubstring(str));




//without inbuilt
function largestSubstring(str){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = ''
    let currSubstring = ''
    let isVowel = false

    for(let i=0;i<str.length;i++){
        isVowel = false
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                isVowel = true;
                break;
            }
        }
        if(!isVowel){
            currSubstring += str[i]
        }else{
            if(currSubstring.length>result.length){
                result = currSubstring
            }
            currSubstring = ''
        }
    }
    if(currSubstring.length>result.length){
        result = currSubstring
    }
    return result;
}

let stri = 'hellotherxyz'
console.log(largestSubstring(stri));
