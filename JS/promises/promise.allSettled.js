const promise1 = new Promise((resolve)=>setTimeout(resolve,1000,'time'))
const promise2 = Promise.resolve('success');
const promise3 = Promise.reject('Error');
const promise4 = Promise.resolve('another success');

Promise.allSettled([promise1,promise2,promise3,promise4])
    .then((results)=>{
        console.log(results);
        
    })
    .catch(error=>{
        console.error(error)
    })