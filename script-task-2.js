// Task 2: Filter and Search an Array
// Create an empty array called shoppingList
let shoppingList = [];

// Function to add an item to the shoppingList only if it doesn't already exist
function addItem(item) {
    const normalizedItem = item.trim().toLowerCase();
    const exists = shoppingList.some(existingItem => existingItem.toLowerCase() === normalizedItem);
    
    if (!exists) {
        shoppingList.push(item);
        console.log(`Added "${item}" to the shopping list.`);
    } else {
        console.log(`"${item}" is already in the shopping list.`);
    }
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

// Function to filter items by search term (case-insensitive)
function filterItems(searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = shoppingList.filter(item => item.toLowerCase().includes(lowerSearch));
    return filtered;
}

// Example usage
addItem("Apples");
addItem("Milk");
addItem("Bread");
addItem("Eggs");
addItem("milk"); // Should not add duplicate

displayList();

removeLastItem();
displayList();

// Search
console.log("Filtered items (search: 'ap'):", filterItems("ap"));
console.log("Filtered items (search: 'B'):", filterItems("B"));