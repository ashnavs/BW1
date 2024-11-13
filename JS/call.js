const person = {
    firstName: 'Ashna',
    lastName: 'VS',
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

   
}

const anotherPerson = {firstName:'Ayra', lastName:'Mariam'}

console.log(person.fullName.call(anotherPerson));

console.log(person.fullName()); 



