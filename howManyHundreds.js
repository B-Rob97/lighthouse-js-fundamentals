function howManyHundreds(num) {
  if (num % 100 === 0) {
    // If the number is already a multiple of 100, return the result of dividing the number by 100
    return num / 100;
  } else if (num % 100 !== 0) {
    // If the number is not a multiple of 100, round down the result of dividing the number by 100 using Math.floor()
    return Math.floor(num / 100);
  }
}

console.log(howManyHundreds(5689)); // Output: 0
