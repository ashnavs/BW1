const target = { name: "Alice" };

const handler = {
  get(target, property) {
    console.log(`Getting property "${property}"`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property "${property}" to "${value}"`);
    target[property] = value;
    return true; // Indicates success
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);    // Logs "Getting property "name"" then "Alice"
proxy.age = 25;             // Logs "Setting property "age" to "25""
console.log(proxy.age);      // Logs "Getting property "age"" then "25"
