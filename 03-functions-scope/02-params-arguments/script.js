// Use the Spread operator (aka rest parameter) when defining a parameter to allow unlimited arguments
// The spread operator creates an array from all the values passed in
function add(...nums) {
    let sum = 0;
    for(let num of nums) {
        // if(!isNaN(num)) {
        if(typeof(num) === 'number') {
            sum += num;
        }
    }
    return sum;
}
console.log(add(5)); // 5
console.log(add(5, 1)); // 6
console.log(add(5, 1, 9)); // 15
console.log(add("Marc", "Leo", "Hauschildt"));


function add2(start, ...nums) {
    let sum = start;
    for(let num of nums) {
        if(typeof(num) === 'number') {
            sum += num;
        }
    }
    return sum;
}
console.log(add(5, 1, 9)); // 15 (5 is the start argument, 1 and 9 are the nums arguments)