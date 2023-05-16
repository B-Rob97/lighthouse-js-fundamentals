const chooseStations = function(stations) {
  var goodStations = [];

  // Iterate through each station in the stations array
  for (const station of stations) {
    // Check if the capacity is greater than or equal to 20 and the type is either "school" or "community centre"
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      // If the conditions are met, add the station name (at index 0) to the goodStations array
      goodStations.push(station[0]);
    }
  }

  // Return the array of good stations
  return goodStations;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations)); // Output: ['Bright Lights Elementary', 'Moose Mountain Community Centre']
