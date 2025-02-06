const sprintf = require('sprintf-js').sprintf;

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

console.log('0 1 2 3 4');
for(let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('1 2 3 4 5');
for(let i = 1; i < 6; i++) {
    console.log(i);
}
console.log('1 3 5');
for(let i = 1; i < 6; i += 2) {
    console.log(i);
}
console.log('5 4 3 2 1');
for(let i = 5; i > 0; i--) {
    console.log(i);
}
console.log('5 3 1');
for(let i = 5; i > 0; i -= 2) {
    console.log(i);
}

//*
//**
//***
//****
//*****
for(let i = 0; i < 5; i++) {
    let result = '';
    for(let j = 0; j < i + 1; j++) {
        result += '*';
    }
    console.log(result);
}

// Multiplication table
for(let i = 1; i < 10; i++) {
    let result = '';
    for(let j = 1; j < 10; j++) {
        result += sprintf('%2d ', i * j);
    }
    console.log(result);
}