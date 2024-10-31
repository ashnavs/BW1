function rverseString(str){
    if(str === ""){
        return ""
    }

    return str.charAt(str.length-1) + rverseString(str.slice(0,-1))
}

console.log(rverseString('hello'));

