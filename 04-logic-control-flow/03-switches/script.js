function getDayOfWeek(date) {
    switch (date.getDay()) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}
const today = new Date();
console.log(getDayOfWeek(today));
const birthday = new Date('1981-02-06T11:00:24.873Z');
console.log(getDayOfWeek(birthday));











