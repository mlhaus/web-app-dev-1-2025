const a = 40;
const b = 0;
const c = 30;
if(a < b && c > b) {
    console.log("both are true")
}

// Short-circuit evaluation with ||
// If the first expression is true, the second expression will not be evaluated
if(a < b || c > b) {
    console.log("at least one is true")
}
// Short-circuit evaluation with &&
// If the first expression is false, the second expression will not be evaluated
if(b !== 0 && c > b) {
    console.log(a / b);
}