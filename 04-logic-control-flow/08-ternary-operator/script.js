const age = 17;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

// Using a ternary operator
// (expression) ? 'Value if true' : 'value if false'
console.log((age >= 18) ? 'You can vote' : 'You can not vote');

let movies = ['Movie1', 'Movie2', 'Movie3'];
console.log(`There ${(movies.length == 1 ? 'is' : 'are')} ${movies.length} movie${(movies.length != 1) ? 's' : ''}`);

