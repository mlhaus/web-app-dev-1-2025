// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase
const firstName = "Marc";
const names = ['Edward', 'Robert', 'Gabe', 'Tyson', 'Angel', 'Karla', 'Ben'];
console.log(names[0]); // Edward
// Count-controlled loop in Python
// for i in range(len(names)):
//     print(names[i])
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Python dictionaries and JavaScript objects are basically the same
const meal = {title: "Pizza", calories: 400};
meal.calories += 10;
console.log(`${meal.title} has ${meal.calories} calories`);

// Difference between let and var

// Variables that are declared with var have function scope.
// Variables that are declared with let statement have block scope.

// With var, redeclaring a variable inside a block will also redeclare the variable outside the block.
// With let, we cannot redeclare a variable in the same scope.
var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
    console.log(x); // Expected output: 2
    console.log(y); // Expected output: 2
}

console.log(x); // Expected output: 2
console.log(y); // Expected output: 1

console.log(6 + 4); // 10
console.log(6 - 4); // 2
console.log(6 * 4); // 24
console.log(6 / 4); // 1.5
console.log(Math.floor(6 / 4));
console.log(Math.ceil(6 / 4));
console.log(6 % 4); // 2







