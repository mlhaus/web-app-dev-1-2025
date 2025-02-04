// while ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// [initialExpression]
// while ([conditionExpression]) {
//   statement;
//   [incrementExpression]
// }

console.log('0 1 2 3 4');
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
console.log('1 2 3 4 5');
i = 1;
while(i < 6) {
    console.log(i);
    i++;
}
console.log('1 3 5');
i = 1;
while(i < 6) {
    console.log(i);
    i += 2;
}
console.log('5 4 3 2 1');
i = 5;
while(i > 0) {
    console.log(i);
    i--;
}
console.log('5 3 1');
i = 5;
while(i > 0) {
    console.log(i);
    i -= 2;
}


console.log('0');
i = 0;
do {
    console.log(i);
    i++;
} while(false);











