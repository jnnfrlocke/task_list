var shopping = ["Apples", "Hazelnut Milk", "Cherries", "Bananas", "Bread", "Peanut Butter", "Blackberry Jelly", "Frozen Pineapple", "Frozen Strawberries", "Protein Powder", "Spinach", "Cereal", "Waffles", "Ground Beef", "Tortillas"]

var itemCount = shopping.length;
document.getElementById('itemNum').textContent = "You have " + itemCount + " items on your list.";

for (var counter = 0; counter < itemCount; counter++) {
    // console.log(shopping[count]);
    var li = document.createElement("li");
    var text = document.createTextNode(shopping[counter]);
    // console.log(text);
    li.appendChild(text);
    document.getElementById('groceries').appendChild(li);
    counter++;
}