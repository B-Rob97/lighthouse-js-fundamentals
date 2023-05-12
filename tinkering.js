const amounts = [61.00, 52.25, 112.99, 5.00]
/* OLD WAY using let
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);
*/

// NEW WAY using for...of 
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: $", total);

/* Benefits vs looping over whole array:
-It enhances code readability by providing a clear and concise syntax.
-It eliminates the need for manual index management, reducing the chance of errors.
-The loop is versatile and can be used with other iterable objects like strings, maps, and sets.
-It guarantees the natural order of iteration from the first element to the last.
-It simplifies array traversal and allows developers to focus on the logic within the loop.
-Its compatibility with different data structures promotes code reusability.
-The loop is widely recommended for its simplicity and ability to handle ordered data. */

/*  Scenarios where for...of looping isn't useful
-Need for index access or manipulation within the loop.
-Requiring early termination of the loop based on a specific condition.
-When reverse iteration is necessary.
-Compatibility requirements with older JavaScript environments lacking ES6 support.
-Performance-critical scenarios with large datasets where overhead should be minimized. */

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);