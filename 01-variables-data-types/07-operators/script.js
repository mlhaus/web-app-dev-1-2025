// 1. Arithmetic Operators
console.log(6 / 4); // 1.5
console.log(Math.floor(6 / 4)); // 1
console.log(6 / 4 | 0); // 1
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

// 2. Assignment Operators


// 3. Comparison Operators
const x = 2;
console.log(x == 2); // true
console.log(x == '2'); // true, checks for equality
console.log(x === '2'); // false, checks for equality and data type

const y = 1.1 + 2.2; // 3.3000000000000003
console.log(y);
console.log(y == 3.3); // false
console.log(isEqual(y, 3.3)); // true

function isEqual(a, b) {
    return Math.floor(a - b) == 0;
}
