function finalPosition(moves) {
  let position = [0, 0]; // Initialize the position at [0, 0] (starting position)

  // Iterate through each move in the moves array
  for (const move of moves) {
    if (move === 'north') {
      // Move north: Increase the Y coordinate by 1
      position[1] += 1;
    } else if (move === 'south') {
      // Move south: Decrease the Y coordinate by 1
      position[1] -= 1;
    } else if (move === 'west') {
      // Move west: Decrease the X coordinate by 1
      position[0] -= 1;
    } else if (move === 'east') {
      // Move east: Increase the X coordinate by 1
      position[0] += 1;
    }
  }

  return position; // Return the final position after all the moves
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

console.log(finalPosition(moves)); // Output: [-1, 4]