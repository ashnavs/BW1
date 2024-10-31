//sallow copy
const original = {a:1,b: {c:2}}

const shallowCopy = {...original}

shallowCopy.a = 3
shallowCopy.b.c = 5
console.log(shallowCopy.a) // 3
console.log(shallowCopy.b.c); // 5
console.log(original.b.c) //5 (its changed becuase it a nested object so that change is affect t in the refrence so it also affected the original)
console.log(original.a) // 1 (its not changed because its not nested)
console.log(shallowCopy) // { a: 3, b: { c: 5 } }

//deep copy
const originalDeep = {a:1,b:{c:2}}
const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.b.c = 5
console.log(deepCopy.b.c) // 5
console.log(originalDeep.b.c) // 2














const obj1 = {a:1,b:{c:2}}

const deep = JSON.parse(JSON.stringify(obj1))

deep.b.c = 3
console.log(deep.b.c); //3
console.log(obj1.b.c); //2



const obj2 = {a:1,b:{c:2}}


const shallow = {...obj2}

shallow.b.c = 5 
console.log(shallow.b.c); //5
console.log(obj2.b.c); //5



