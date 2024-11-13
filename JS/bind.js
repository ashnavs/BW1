const person = {
    name: 'Ashna',
    greet(greetings){
        console.log(`${greetings}, ${this.name}!`);
        
    }
}

const greetPerson = person.greet.bind(person,'Hi')
greetPerson()