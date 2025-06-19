// Task 3: Render the List in the Browser
// Shopping list array
let shoppingList = [];

// Function to add an item (if not a duplicate)
function addItem(item) {
    const normalizedItem = item.trim().toLowerCase();
    const exists = shoppingList.some(existing => existing.toLowerCase() === normalizedItem);
    
    if (!exists && item.trim() !== "") {
        shoppingList.push(item);
        updateDisplay();
    } else if (exists) {
        alert(`"${item}" is already in the list.`);
    }
}

// Function to remove the last item
function removeLastItem() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
        updateDisplay();
    } else {
        alert("The shopping list is already empty.");
    }
}

// Function to update the displayed list
function updateDisplay() {
    const listElement = document.getElementById("shoppingListDisplay");
    listElement.innerHTML = ""; // Clear the list

    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}

// Event handler for the "Add Item" button
function handleAddItem() {
    const input = document.getElementById("itemInput");
    const item = input.value;
    addItem(item);
    input.value = ""; // Clear the input
    input.focus();
}

// Event handler for the "Remove Last Item" button
function handleRemoveLastItem() {
    removeLastItem();
}