const item1 = {
    id: 1,
    title: 'Take out trash',
    user: {
        name1: 'John',
        name2: 'Sarah'
    },
};

// Destructuring
const {id, title}  = item1;
const {name1, name2} = item1.user;
console.log(`${name1} and ${name2} are responsible for '${title}'`);