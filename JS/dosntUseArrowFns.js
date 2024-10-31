//ARGUMENTS
// const sum = () => {
    // console.log(arguments)
// }

// sum(1,2,3)




// function sum() {
//     console.log(...arguments)
// }

// sum(1,2,3)


//THIS:
// const person = {
//     name:'John',
//     sayHi:function (){
//         console.log(`Hi, Iam ${this.name}`) // o/p: Hi, Iam undefined
//     }
// }

// person.sayHi()


// const person = {
//     name:'John',
//     sayHi: function(){
//         const arrowFunc = () => {
//             console.log(`Hi, Iam ${this.name}`)
//         }
//         arrowFunc()
//     }
    
// }

// person.sayHi()



//CONSTRUCTOR
// const Person = (name) => {
//     this.name = name;
// }

// const person = new Person('John')
// console.log(person) //Person is not a constructor

// function Person(name){
//     this.name = name;
// }

// const person = new Person('John')
// console.log(person) //Person { name: 'John' }



