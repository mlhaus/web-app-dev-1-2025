const fruits = ['apple', 'banana', 'berries', 'artichoke', 'cherries', 'cranberry'];
fruits.forEach(function(fruit) {
    console.log(`I ate a ${fruit}`);
});
console.log();
fruits.forEach(fruit => console.log(`I ate a ${fruit}`));