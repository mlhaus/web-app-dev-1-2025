sayHello("Marc"); // Argument is the value passed to the parameter

// Hoisting in JavaScript is a behavior where variable and function declarations
// are moved to the top of their scope during the compilation phase,
// before the code is executed. This allows the use of functions and variables
// before they are declared in the code. However, it's important to note that
// only declarations are hoisted, not initializations or assignments.

// Parameter is the input variable(s) to the function
// This is called a function declaration. 
function sayHello(name = "Human") {
    console.log("Hello " + name);
}

// a and b are input parameters
// The result of (a + b) is the output
function add(a= 0, b = 0) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5)); // 5
console.log(add()); // 0, but if the default values are removed, this will return NaN (not a number)
console.log(add(add(add(8, 1), 9), 2)); // 8 + 1 = 9, 9 + 9 = 18, 18 + 2 = 20