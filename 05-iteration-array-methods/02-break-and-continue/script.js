console.log('0 1 2 3');
for(let i = 0; i < Infinity; i++) {
    console.log(i);
    if(i === 3) {
        break; // end the loop
    }
}

console.log('0 1 2 4');
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue; // skip current iteration, continue to the next iteration
    }
    console.log(i);
}