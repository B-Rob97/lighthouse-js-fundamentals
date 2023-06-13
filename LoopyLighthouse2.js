function loopyLighthouse(range, multiples, words) {
  // Initialize the loop variable 'x' to the first value in the 'range' array
  let x = range[0];
  
  // Enter the loop and continue as long as 'x' is less than or equal to the second value in the 'range' array
  while (x <= range[1]) {
    // Check if 'x' is divisible by both 'multiples[0]' and 'multiples[1]'
    if ((x % multiples[0] === 0) && (x % multiples[1] === 0)) {
      console.log(words[0] + words[1]); // Print the concatenation of the two words
    }
    // Check if 'x' is divisible only by 'multiples[0]'
    else if (x % multiples[0] === 0) {
      console.log(words[0]); // Print the first word
    }
    // Check if 'x' is divisible only by 'multiples[1]'
    else if (x % multiples[1] === 0) {
      console.log(words[1]); // Print the second word
    }
    // If none of the above conditions are met, print the value of 'x'
    else {
      console.log(x);
    }
    
    // Increment the value of 'x' by 1 to move to the next number in the range
    x++;
  }
}








loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);