const firstPromise = new Promise((resolve)=>{
    setTimeout(()=>resolve('1st promise resolved'),1000)
});


firstPromise
    .then(result=>{
        console.log(result);
        return new Promise((resolve)=>{
            setTimeout(()=>resolve('2nd promise resolved'),1000)
        })
        
    })
    .then(result=>{
        console.log(result);
        
    })
    .catch(error=>{
        console.error('Error:',error)
    })