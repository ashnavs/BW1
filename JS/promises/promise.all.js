const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve)=>{
    setTimeout(resolve,1000,'foo')
})
const promise3 = Promise.resolve(47)

Promise.all([promise1,promise2,promise3])
    .then((values)=>{
        console.log(values);
        
    })
    .catch((err)=>{
        console.error(err)
    })