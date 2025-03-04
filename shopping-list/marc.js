const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const listItemsArr = [];

// let listItem = `<li>
//           Bread
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>
//         </li>`;
// itemList.innerHTML += listItem;

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
    // listItem.innerHTML = `${itemName}
    //     <button class="remove-item btn-link text-red">
    //     <i class="fa-solid fa-xmark"></i>
    //     </button>`;
    listItem.appendChild(document.createTextNode(itemName));
    const button = createButton('red', 'circle-xmark', 'remove-item');
    listItem.appendChild(button);
    itemList.appendChild(listItem);
}

function storeListItem(itemName) {
    listItemsArr.push(itemName);
    localStorage.setItem('items', JSON.stringify(listItemsArr));
}

window.addEventListener('DOMContentLoaded', function() {
    const items = JSON.parse(localStorage.getItem('items'));
    const allItems = listItemsArr.concat(items);
    allItems.forEach(item => {createListItem(item)});
});

itemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createListItem(itemInput.value);
    storeListItem(itemInput.value);
    itemInput.value = '';
})

itemList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log("You clicked the list item");
    }
});

clearBtn.addEventListener('click', function(event) {
    let confirmClear = confirm('Are you sure you want to clear the list?');
    if (confirmClear) {
        itemList.innerHTML = '';
    }
});

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

