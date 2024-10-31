function Counter(){
    let count = 0;

    return function(){
        count += 1;
        console.log(count);
        
    }
}

const counter = Counter()
counter()
counter()