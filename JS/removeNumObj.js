const obj = {
    name: 'Ashna',
    age: 23,
    city: 'ekm',
    num: 7909191934
}

Object.keys(obj).forEach(key=>{
    if(typeof obj[key] === 'number') delete obj[key]
})

console.log(obj);

