// This is a function expression
const sayHello = function(name = "Human") {
    console.log("Hello " + name);
}

sayHello(); // Hello Human
sayHello("Marc"); // Hello Marc
