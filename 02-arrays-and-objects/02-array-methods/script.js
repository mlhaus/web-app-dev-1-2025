const arr = [8,1,9,2,6,7];
arr.push(5); // add to end
console.log(arr.toString());
const arr2 = [];
arr2.push(arr.pop()); // remove from end
console.log(arr.toString());
console.log(arr2.toString());
arr.unshift(3); // add to the beginning
console.log(arr.toString());
arr.shift(); // remove from the beginning
console.log(arr.toString());
const arr3 = structuredClone(arr); // create a deep copy
arr3.reverse();
console.log(arr.toString());
console.log(arr3.toString());
arr3.sort();
console.log(arr3.toString());
arr3.reverse();
console.log(arr3.toString());
console.log(arr.includes(5)); // false
console.log(arr.includes(6)); // true
console.log(arr.indexOf(5)); // -1
console.log(arr.indexOf(6)); // 4
// slice returns selected elements of an array (start index, stop index)
console.log(arr.slice(1, arr.length - 1)); // return all but the first and last elements
console.log(arr.slice(arr.length / 2)); // return last half of array
// splice is similar to slice, (start index, number of elements to delete, values to replace)
arr.splice(1, 2, [-1]); // Removes indexes 1 and 2, replaces with a new list
console.log(arr.toString());
arr.splice(3, 1); // This will remove a single value in the middle of an array
console.log(arr.toString());