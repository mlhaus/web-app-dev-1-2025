const fruits = ['apple', 'banana', 'cherry', 'dragonfruit', 'lemon'];
fruits[1] = 'orange';
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for(let fruit of fruits) {
    console.log(fruit);
}
fruits.forEach(function(fruit) {
    console.log(fruit);
});
fruits.forEach(fruit => console.log(fruit));