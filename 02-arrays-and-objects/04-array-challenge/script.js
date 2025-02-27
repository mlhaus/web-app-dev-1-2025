const min = 1;
const max = 100;
const max2 = 50;
const x = Math.floor(Math.random() * (max - min + 1) + min);
const y = Math.floor(Math.random() * (max2 - min + 1) + min);

const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const reminder = x % y;

const sumOutput = `${x} + ${y} = ${sum}`;
const differenceOutput = `${x} - ${y} = ${difference}`;
const productOutput = `${x} * ${y} = ${product}`;
const quotientOutput = `${x} / ${y} = ${quotient}`;
const rmOutput = `${x} % ${y} = ${reminder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);