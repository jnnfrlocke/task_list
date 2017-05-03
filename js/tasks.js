// Create empty array
var shopping = [];
var itemCount;

// Set item count and display number of items in list
function getItemCount() {
    itemCount = shopping.length;
    document.getElementById('itemNum').textContent = "You have " + itemCount + " items on your list.";
}

// Show array items in list format 
function showItems(addLi) {
    for (var counter = 0; counter < itemCount; counter++) {
        // console.log(shopping[count]);
        var li = document.createElement("li");
        var text = document.createTextNode(addLi[counter]);
        // console.log(text);
        li.appendChild(text);
        document.getElementById('groceries').appendChild(li);
    }
}

// Add new item to array
function addGroceryItemToArray() {
    // Delete li
    var groceries = document.getElementById('groceries');
    groceries.innerHTML = '';
    // Get new item from input
    var newItem = document.getElementById('itemsAdded').value;
    // Add to array
    shopping.push(newItem);
    // Update item count for header
    getItemCount();
    // Load List
    showItems(shopping);
}

// Get Initial Count
getItemCount();
// Get Initial Grocery List 
showItems(shopping);

// Show new items in array on the page

// var counter = 0;
// while (counter < shopping.length) {
//     var li = document.createElement("li");
//     var text = document.createTextNode(shopping[counter]);
//     // console.log(text);
//     li.appendChild(text);
//     document.getElementById('groceries').appendChild(li);
//     counter++;
// }