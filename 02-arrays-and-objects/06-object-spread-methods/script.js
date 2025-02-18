const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);


const item1 = {item_id: 1, description: "buy milk", dueDate: "2025-02-26"};
const item2 = {item_id: 2, description: "take out garbage", dueDate: "2025-02-20"};
const item3 = {item_id: 3, description: "pay bills", dueDate: "2025-03-01"};
const todoList = [item1, item2, item3];
todoList.forEach(item => {
    console.log(item.item_id);
    console.log(item.description);
    console.log(item.dueDate);
    console.log()
});