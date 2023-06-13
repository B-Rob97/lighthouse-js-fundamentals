function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth; // Calculate the age by subtracting the year of birth from the current year
  return name + " is " + age + " years old."; // Return a string with the name and calculated age
}

console.log(ageCalculator("Miranda", 1983, 2015)); // Output: "Miranda is 32 years old."
console.log(ageCalculator("Ferdinand", 1988, 2015)); // Output: "Ferdinand is 27 years old."
console.log(ageCalculator("Josh", 1997, 2023)); // Output: "Ferdinand is 27 years old."
