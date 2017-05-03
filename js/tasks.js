var shopping = []

var itemCount = shopping.length;
document.getElementById('itemNum').textContent = "You have " + itemCount + " items on your list.";

for (var counter = 0; counter < itemCount; counter++) {
    // console.log(shopping[count]);
    var li = document.createElement("li");
    var text = document.createTextNode(shopping[counter]);
    // console.log(text);
    li.appendChild(text);
    document.getElementById('groceries').appendChild(li);
}

// var counter = 0;
// while (counter < shopping.length) {
//     var li = document.createElement("li");
//     var text = document.createTextNode(shopping[counter]);
//     // console.log(text);
//     li.appendChild(text);
//     document.getElementById('groceries').appendChild(li);
//     counter++;
// }