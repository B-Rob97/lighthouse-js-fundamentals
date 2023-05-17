const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Print out the contents of ingredients using a for loop
console.log("Printing with for loop:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Print out the contents of ingredients using a while loop
console.log("Printing with while loop:");
let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

// Print out the contents of ingredients backwards using a for loop
console.log("Printing backwards with for loop:");
for (let y = ingredients.length - 1; y >= 0; y--) {
  console.log(ingredients[y]);
}

console.log("Printing backwards with while loop:")
let z = ingredients.length - 1;
while (z >= 0) {
  console.log(ingredients[z]);
  z--;
}