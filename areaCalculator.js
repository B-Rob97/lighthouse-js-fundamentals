function calculateRectangleArea(length, width) {
  // Check if both length and width are non-negative
  if (length >= 0 && width >= 0) {
    return length * width; // Calculate the area of the rectangle
  } else {
    return undefined; // Return undefined if any dimension is negative
  }
}

function calculateTriangleArea(base, height) {
  // Check if both base and height are non-negative
  if (base >= 0 && height >= 0) {
    return (base * height) / 2; // Calculate the area of the triangle
  } else {
    return undefined; // Return undefined if any dimension is negative
  }
}

function calculateCircleArea(radius) {
  // Check if the radius is non-negative
  if (radius >= 0) {
    return Math.PI * (radius * radius); // Calculate the area of the circle
  } else {
    return undefined; // Return undefined if the radius is negative
  }
}

// Test the calculateRectangleArea function
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

// Test the calculateTriangleArea function
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

// Test the calculateCircleArea function
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
