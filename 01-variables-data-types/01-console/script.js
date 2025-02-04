document.body.style.backgroundColor = 'blue';
console.log("Hello, Console!");
const today = new Date();
document.write(`Copyright ${today.getFullYear()}`); // Will not run using NodeJS
window.alert("Hello, Console!"); // Will not run using NodeJS
const isHappy = window.confirm("Are you happy?"); // Will not run using NodeJS
if(isHappy) {
    console.log("I'm happy too!");
} else {
    console.log("Aw, sorry to hear that")
}

let x = 10;
// Python equivalent to variable declaration
// x = 10

// Increment the variable x
x++; // Does not work in Python
x = x + 1; // Does work in Python
x += 1; // Does work in Python
console.log("The value of x is: " + x);
// Python equivalent to concatenation
// print("The value of x is: " + str(x))

console.log(`The value of x is: ${x}`)
// Python equivalent to template string literal
// print(f"The value of x is: {x}")