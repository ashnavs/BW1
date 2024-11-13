function once(fn){
    let executed = false

    return function(...args){
        if(!executed){
            executed = true
            return fn(...args)
        }else{
            console.log('This fn only ecexuted once');
            
        }
    }
}

const greet = once((name)=>console.log(`Hi ${name}`))

greet('Ashna')
greet('ddksj')