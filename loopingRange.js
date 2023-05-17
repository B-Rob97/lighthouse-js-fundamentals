function range(start, end, step) {
  let ranges = [];

  // Check for invalid input conditions
  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start >= end ||
    step <= 0
  ) {
    return [];
  } else if (start < end) {
    // Generate the range of numbers
    for (var i = start; i <= end; i += step) {
      ranges.push(i);
    }
    return ranges;
  }
}








console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));