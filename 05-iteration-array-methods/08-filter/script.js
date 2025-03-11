const fruits = ['apple', 'banana', 'berries', 'artichoke', 'cherries', 'cranberry'];
// const fruitsA = fruits.filter(function(fruit) {
//     return fruit.startsWith('a');
// });
const fruitsA = fruits.filter(fruit => fruit.startsWith('a'));
console.log(fruitsA)
const fruitsBC = fruits.filter(fruit => !fruit.startsWith('a'));
console.log(fruitsBC)