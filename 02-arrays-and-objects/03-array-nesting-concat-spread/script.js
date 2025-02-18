const fruits = ['apple', 'banana', 'cherry'];
const berries = ['strawberries', 'blueberries'];
const allFruit = fruits.concat(berries);
console.log(allFruit);
// spread operator (...)
const allFruit2 = [...fruits, ...berries];
console.log(allFruit2);
// Multi-dimensional array
const allFruit3 = [fruits, berries];
console.log(allFruit3[0][0]); // apple
console.log(allFruit3[0][1]); // banana
console.log(allFruit3[0][2]); // cherry
console.log(allFruit3[1][0]); // strawberries
console.log(allFruit3[1][1]); // blueberries
for(let row = 0; row < allFruit3.length; row++) {
    for(let col = 0; col < allFruit3[row].length; col++) {
        console.log(allFruit3[row][col]);
    }
}
//flat() function will convert a multidimensional array into a single-dimensional array
const allFruit4 = allFruit3.flat();
for(let fruit of allFruit4) {
    console.log(fruit);
}