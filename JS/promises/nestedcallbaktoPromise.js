//nested callback

// function taskA(callback){
//     setTimeout(()=>{
//         console.log('Task A completed');
//         callback()
//     },1000)
// };

// function taskB(callback){
//     setTimeout(()=>{
//         console.log('Tas B cmpleted');
//         callback()
//     },1000)
// };


// function taskC(callback){
//     setTimeout(()=>{
//         console.log('Task C completed');
//         callback()
//     },1000)
// };


// //using nested callbacks
// taskA(()=>{
//     taskB(()=>{
//         taskC(()=>{
//             console.log('All tasks are completed');
            
//         })
//     })
// })





//CONVERTING TO PROMISE
function taskA(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('A completed');
            resolve()
            
        },1000)
    })
}

function taskB(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('B completed');
            resolve()
            
        },1000)
    })
}

function taskC(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('C completed');
            resolve()
            
        },1000)
    })
}


//using promises to avod nesting
taskA()
.then(taskB)
.then(taskC)
.then(()=>{
    console.log('All tasks are completed');
    
})
.catch((error)=>{
    console.error('An error occured',error)
})