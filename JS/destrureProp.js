const Person = {
    name: 'Ashna',
    age: 23,
    address: {
        city:'ekm'
    }
}

// const {name, ...rest} = Person
const {name, address:{city}} = Person
console.log(city);
