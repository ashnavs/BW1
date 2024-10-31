const promise1 = new Promise((resolve) => setTimeout(resolve,5000,'first'));
const promise2 = new Promise((resolve) => setTimeout(resolve,1000,'second'));

Promise.race([promise1,promise2])
    .then((values)=>{
        console.log(values);
        
    })
    .catch(error=>{
        console.error(error)
    })