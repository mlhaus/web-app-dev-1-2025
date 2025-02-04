const firstName = 'Marc';
console.log(firstName, typeof firstName);
const age = 43;
console.log(age, typeof age);
const weight = 195.5;
console.log(weight, typeof weight);
const isHappy = true;
console.log(isHappy, typeof isHappy);
const favMovie = null;
console.log(favMovie, typeof favMovie);
let favSong;
console.log(favSong, typeof favSong);
const nationalDebt = 9999999999999999999999999999999n;
console.log(nationalDebt, typeof nationalDebt);
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(daysOfWeek, typeof daysOfWeek);
const _class = {numOfStudent: 5, startTime: '12:20 PM'};
console.log(_class, typeof _class);

function changeArr(arr, index, newValue) {
    arr[index] = newValue;
}

changeArr(daysOfWeek, 0, 'Sunday');
console.log(daysOfWeek);
const mystery = daysOfWeek;
changeArr(mystery, 1, 'Monday');
console.log(daysOfWeek); // Will this print 'Mon' or 'Monday'?

const a = 1;
let b = a;
b++;
console.log(a);
console.log(b);