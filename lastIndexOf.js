function lastIndexOf(array, value) {
  // Start the loop from the last element of the array
  for (let i = array.length - 1; i >= 0; i--) {
    // Check if the current element matches the value
    if (array[i] === value) {
      // If a match is found, return the index
      return i;
    }
  }
  // If no match is found, return -1
  return -1;
}




console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);