# Lab 4.2: Array Manipulation

## Reflection
After completing this lab, reflect on the following questions:
1. How did array methods like push() and filter() help you manipulate data in this activity?

   Array methods like `push()` and `filter()` made it easy to add new items to the shopping list and to search for or filter items based on user input. `push()` allowed for quick insertion at the end of the array, while `filter()` enabled searching for items that matched a specific term, making the code concise and readable.

2. What challenges did you face when trying to filter and search for items in the array?

   One challenge was ensuring that the search and duplicate checks were case-insensitive and ignored extra spaces. This required normalizing both the input and the items in the array using `trim()` and `toLowerCase()`. Another challenge was handling empty input and avoiding adding duplicates.

3. How would you modify this code to make it more efficient or user-friendly?

   To improve efficiency and user experience, I would:
   - Add real-time filtering as the user types a search term.
   - Provide visual feedback or error messages in the UI instead of using alerts.
   - Allow users to remove specific items, not just the last one.
   - Store the shopping list in local storage so it persists after page reloads.
   - Add input validation to prevent adding empty or whitespace-only items.