//using inbuilt
//  const price = '₹80.00'
//  const result = parseInt(price.replace('₹',''))
//  console.log(result);

//  const price1 = 80.00
//  const result1 = Math.floor(price1)
//  console.log(result1);
 

//without inbuilt
function convertPrice(price){
    let result = 0;
    let multiplier = 1;
    let isDecimal = false

    for(let i=0;i<price.length;i++){
        let char = price[i]

        if(char >= '0' && char<='9'){
            if(isDecimal){
                multiplier *= 0
            }else{
                result = result * 10 + (char-'0')
            }
        }
        if(char === '.'){
            isDecimal=true
        }
    }
    return result
}

const price = '₹80.00'
console.log(convertPrice(price));

 