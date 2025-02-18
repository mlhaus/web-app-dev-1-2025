const person = {
    dob: "1981-02-06",
    firstName: "Marc",
    lastName: "Hauschildt",
    schoolsAttended: ['UNI', 'Kirkwood', 'Keller Graduate School'],
    address: {
        street: "123 Main Street",
        city: "Cedar Rapids",
        state: "Iowa",
        coordinates: {
            lat: 45.234,
            long: -122.432
        }
    },
    age: function (dateString) {
        const inputDate = new Date(dateString);
        const today = new Date();
        let years = today.getFullYear() - inputDate.getFullYear();
        if (
            today.getMonth() < inputDate.getMonth() ||
            (today.getMonth() === inputDate.getMonth() && today.getDate() < inputDate.getDate())
        ) {
            years--;
        }
        return years;
    },
    isAdmin: true
};

console.log(person.firstName + " " + person.lastName);
console.log(person.dob);
console.log(person.isAdmin);
console.log(person.age(person.dob));
person.schoolsAttended.forEach(school => console.log(school));
// person.address = "123 Main Street";
// console.log(person.address);
// console.log(person);
console.log(person.address.coordinates.lat);
console.log(person.address.coordinates.long);
console.log(person['firstName'] + " " + person['lastName']);
console.log(person['address']['coordinates']['lat']);
console.log(person['address']['coordinates']['long']);

const {lat, long} = person.address.coordinates; // destructuring
console.log(lat);
console.log(long);
console.log(person);
console.log(JSON.stringify(person))



