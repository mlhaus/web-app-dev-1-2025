const today = new Date();
console.log(today);
console.log(today.toLocaleString('en-US', {timeZone: 'America/Chicago'}));

const birthday = new Date('1981-02-06T11:00:24.873Z');
console.log(birthday.toLocaleString('en-US', {timeZone: 'America/Chicago'}));