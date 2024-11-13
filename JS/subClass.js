class Animal{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} makes a noise`);
        
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log(`${this.name} barks`);
        
    }
}

const dog = new Dog('buddy','Golden Street')
dog.speak()
console.log(dog.breed);

const animal = new Animal('Leo')
animal.speak()
