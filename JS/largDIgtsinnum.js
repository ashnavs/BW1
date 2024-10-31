function largeDigit(num){
    let maxDigit = 0;
    while(num>0){
        let digits = num%10;
        if(digits>maxDigit){
            maxDigit = digits
        }

        num = Math.floor(num/10)
    }

    return maxDigit
}

console.log(largeDigit(9873452));

a1c30b40



