//spread

const arr = [1,2,3]
const arr1 = [...arr,4,5]
console.log(arr1) // [1,2,3,4,5]


//rest :collect or gater remaining elements
const [first,second, ...rest] = [1,2,3,4,5]
console.log(first); //1
console.log(second); //2
console.log(rest); //[3,4,5]

//rest in obj
const {name,age,...otherdetails} = {name:'Ashna',age:23, city:'ekm'}
console.log(age); //23
console.log(otherdetails); //{city:'ekm'}




