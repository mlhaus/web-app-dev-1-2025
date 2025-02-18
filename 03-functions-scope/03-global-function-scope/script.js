const x = 1; // This x is declared in global scope

function mystery(x) {
    // This x is declared in the function scope
    x += 10;
    const y = 2;
    x += y;
    return x;
}
console.log(mystery(x)); // 13
console.log(x); // 1
// console.log(y); // ReferenceError, this is a runtime error
console.log("Hello"); // This code doesn't run until the ReferenceError is corrected.

function mystery2(x) {
    // This x is declared in the function scope
    x += 10;
    const y = 2;
    x += y;
    const arr = [];
    arr.push(x);
    arr.push(y);
    return arr;
}
console.log(mystery2(x)[0]); // 13
console.log(mystery2(x)[1]); // 2