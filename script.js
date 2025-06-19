// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList
let shoppingList = [];

// Function to add an item to the shoppingList
function addItem(item) {
    shoppingList.push(item);
    console.log(`Added "${item}" to the shopping list.`);
}

// Function to remove the last item from the shoppingList
function removeLastItem() {
    if (shoppingList.length === 0) {
        console.log("The shopping list is already empty.");
    } else {
        let removedItem = shoppingList.pop();
        console.log(`Removed "${removedItem}" from the shopping list.`);
    }
}

// Function to display all items in the shoppingList
function displayList() {
    if (shoppingList.length === 0) {
        console.log("The shopping list is empty.");
    } else {
        console.log("Shopping List:");
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

// Example usage

addItem("Apples");
addItem("Milk");
addItem("Bread");
addItem("Eggs");

displayList();

removeLastItem();
displayList();