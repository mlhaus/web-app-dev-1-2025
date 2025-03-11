const itemForm = document.getElementById('item-form');
const itemFormBtn = document.querySelector('#item-form button');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');

// Start create button functionality
function createButton(textColor = 'black', iconName = '', ...classes) {
    const button = document.createElement('button');
    button.className = `btn-link text-${textColor}`;
    classes.forEach(c => button.classList.add(c));
    if(iconName !== '') {
        const icon = createIcon(iconName);
        button.appendChild(icon);
    }
    return button;
}
function createIcon(iconName) {
    const icon = document.createElement('i');
    icon.className = `fa-solid fa-${iconName}`;
    return icon;
}
function createListItem(itemName) {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(itemName));
    const button = createButton('red', 'circle-xmark', 'remove-item');
    listItem.appendChild(button);
    itemList.appendChild(listItem);
}
// End create button functionality

// Start localStorage functionality
function getItemsFromStorage() {
    let listItemsArr;
    if(localStorage.getItem('items') !== null) {
        // There are items stored
        listItemsArr = JSON.parse(localStorage.getItem('items'));
    } else {
        // No items exist in storage
        listItemsArr = [];
    }
    return listItemsArr;
}
function storeListItem(itemName) {
    const listItemsArr = getItemsFromStorage();
    listItemsArr.push(itemName);
    localStorage.setItem('items', JSON.stringify(listItemsArr));
}
function setUp() {
    itemList.innerHTML = '';
    const listItemsArr = getItemsFromStorage();
    listItemsArr.forEach(item => {createListItem(item)});
}
function clearStorage() {
    localStorage.removeItem('items');
}
// End localStorage functionality

// Start Update/Delete functionality
function updateItem(item) {
    // Step 1: place the item's text in the form's input field
    itemInput.value = item.textContent;
    // Step 2: Change the Add button to an Update button
    itemFormBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
    itemFormBtn.style.backgroundColor = '#228B22';
    // Step 3: Change the style of all buttons except the one that was clicked
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
}
// End Update/Delete functionality

// Start Event Listeners
window.addEventListener('DOMContentLoaded', setUp);
itemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputItemValue = itemInput.value;
    if(inputItemValue !== '') {
        createListItem(inputItemValue);
        storeListItem(inputItemValue);
        inputItemValue = '';
    }
})
itemList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        // console.log("You clicked the list item");
        updateItem(event.target);
    } else if(event.target.parentElement.classList.contains('remove-item')) {
        // console.log("You clicked the delete button");
        // This is your homework
        // Hint: Target the li, which is the parent of the button, which is the parent of the icon
    }
});
clearBtn.addEventListener('click', function(event) {
    let confirmClear = confirm('Are you sure you want to clear the list?');
    if (confirmClear) {
        itemList.innerHTML = '';
        clearStorage();
    }
});
// These events didn't work: change, keydown, keypress
filter.addEventListener('input', (event) => {
    let value = event.target.value;
    const listItemsArr = getItemsFromStorage();
    const filteredItems = listItemsArr.filter(item =>  item.toLowerCase().includes(value.toLowerCase()));
    itemList.innerHTML = '';
    filteredItems.forEach(item => {createListItem(item)});
});
// End Event Listeners

// ****************************************
// *      Start Code from February 27     *
// ****************************************
// listItems[0].style.backgroundColor = 'yellow';
// listItems[1].style.backgroundColor = 'orange';
// listItems.forEach((el) => el.style.color = 'red');
//
// const mainHeading = document.getElementById('main-heading');
// mainHeading.textContent = "Marc's Shopping List"
// mainHeading.style.color = 'yellow';
// mainHeading.style.backgroundColor = 'dodgerblue';
// mainHeading.style.padding = '0 20px';
// mainHeading.style.borderRadius = '20px';
// ****************************************
// *      End Code from February 27       *
// ****************************************

