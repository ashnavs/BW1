//flat
// const arr = [1,2,3,4,[5,[6,7]]]

// console.log(arr.flat());
// console.log(arr.flat(2));



//flatmap (flat(1)+map)
const arr = [1,2,3,[4]]
const result = arr.flatMap(x=>[x*2])
console.log(result);

const arr1 = [ [ [ [ 1,2,3,34,32,4,23,4]]]]
console.log(`arr1:${arr1}`);

const result1 = arr1.flat(3)
console.log(`result1:${result1}`);




