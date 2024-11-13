// function toTitleCase(str){
//     let low = str.toLowerCase()
//     console.log(`low:${low}`);
//     let splt = low.split(' ')
//     console.log(`split:${splt}`);
//     let mp = splt.map(word=>word.charAt(0).toUpperCase() + word.slice(1))
//     console.log(`map:${mp}`);
//     let res = mp.join(' ')
//     console.log(`res:${res}`);
    
//     return str.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

   
    
// }

// console.log(toTitleCase('hello wOrld'));
// console.log(toTitleCase('HI ALL of yOu'));


//without in-built

// function toTileCase(str){
//     let result = ''
//     let capitalized = true

//     for(let i=0;i<str.length;i++){
//         let char = str[i]

//         if(char === " "){
//             result += char
//             capitalized = true
//         }else{
//             if(capitalized && char >= 'a' && char <= 'z'){
//                 result += String.fromCharCode(char.charCodeAt(0) - 32)
//                 capitalized = false;
//             }else if(!capitalized && char >= 'A' && char <= 'Z'){
//                 result += String.fromCharCode(char.charCodeAt(0) + 32)
//             }else{
//                 result += char
//                 capitalized = false
//             }
//         }
//     }
//     return result;
// };


function toTitleCase(str){
    return str.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}



console.log(toTitleCase('hI ALL Of yoU'));
