// This is an arrow function
// Curly brackets are required after the arrow when there are two or more lines in the function
const sayHello = (name = "Human") => console.log("Hello " + name);

sayHello(); // Hello Human
sayHello("Marc"); // Hello Marc

const names = ['Edward', 'Robert', 'Gabe', 'Ben', 'Angel', 'Karla'];
names.forEach(function(name) {
    sayHello(name);
});
// A parenthesis is required around the arguments when there are 0 or 2 or more arguments
names.forEach(name => sayHello(name));
names.forEach((name, index) => console.log(`${index + 1} ) ${name}`));
names.forEach((name, index) => sayHello(index + ") " + name));

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2