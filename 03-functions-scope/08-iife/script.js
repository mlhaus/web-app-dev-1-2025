// Immediately invoked function expression (IIFE)
// This function no longer needs to be called using sayHello()
(function sayHello(name = "Human") {
    console.log("Hello " + name);
})("Marc");

