console.log('Start');

setTimeout(()=>{
    console.log('timeout');
    
},20)

setImmediate(()=>{
    console.log('Immediate');
    
})

process.nextTick(()=>{
    console.log('nextTick');
    
})

console.log('End');



