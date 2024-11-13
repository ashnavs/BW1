let count = 0;

function countUp(){
   if(count<=10){
    console.log(count);
    count++

    setTimeout(countUp , 1000)}
    
}

countUp()