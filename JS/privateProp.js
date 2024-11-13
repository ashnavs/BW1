class Person {
    #name;

    constructor(name,age){
        this.#name = name,
        this.age = age
    }

    getName(){
        return this.#name;
    }

    setName(newName){
        this.#name = newName
    }
}

const person = new Person('Ashna',23)
console.log(person.getName());
console.log(person.age);

