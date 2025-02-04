console.log(Math.sqrt(9)); // 3
console.log(Math.pow(2, 3)); // 8
const a = 3;
const b = 4;
let c = Math.sqrt(Math.pow(a, 2) + (b * b)); // Pythagoreum Theorem a^2 + b^2 = b^2
console.log(c); // 5
c = Math.hypot(a, b);
console.log(c); // 5
console.log(Math.abs(-3)); // 3
console.log(Math.round(1234.567)); // 1235
console.log(Math.floor(1234.567)); // 1234
console.log(Math.ceil(1234.567)); // 1235
console.log(Math.max(8,9,1,2,6,7));// 9
console.log(Math.min(8,9,1,2,6,7)); //1
console.log(Math.random()); // 0.0-0.999999999

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomRange2 = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomRange3 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for(let i = 0; i < 50; i++) {
    console.log(getRandomRange3(1, 6));
}













