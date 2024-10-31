const promise1 = new Promise((resolve,reject)=>setTimeout(reject,100,'Error'));
const promise2 = new Promise((resolve)=>setTimeout(resolve,200,'Resolved'))


Promise.any([promise1,promise2])
    .then((values)=>{
        console.log(values);
        
    })
    .catch(error=>{
        console.error(error)
    })








    //all reject case
//     const promise1 = new Promise((resolve,reject)=>setTimeout(reject,100,'Error'));
// const promise2 = new Promise((resolve,reject)=>setTimeout(reject,200,'erroe1'))


// Promise.any([promise1,promise2])
//     .then((values)=>{
//         console.log(values);
        
//     })
//     .catch(error=>{
//         console.error(error)
//     })