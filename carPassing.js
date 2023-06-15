const carPassing = function (cars, speed) {
  // Your code in here ...
  if ( speed > 0) {
    cars.push({
      time: Date.now(),
      speed: speed
    })
  }
  return cars;
};
var cars = [];

const speed = 60

carPassing(cars, speed)

console.log(cars)