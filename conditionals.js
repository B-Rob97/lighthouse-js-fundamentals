const raining = false;
const cold = false; 
const temperature = 45;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


/*if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");*/ 

const isCitizen = true;
const age = 18;
// && Logical Operator
if (isCitizen && age >= 18) {
  console.log("You are eligible to vote.");
}
// || Logical Operator
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
} 
// ! Logical Operator
if (!raining) {
  console.log("Leave your umbrella at home!");
}

/* Brett/Roberts/BrettRoberts!
let x = 1
while (x <= 100) {
  if (x % 3 === 0) {
    console.log("BRETT");
  } else if (x % 5 === 0) {
    console.log("ROBERTS");
  } else if (x % 7 === 0) {
    console.log("BRETT ROBERTS");
  } else {
    console.log(x)
  }
  x = x + 1
} */

