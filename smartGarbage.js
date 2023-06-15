const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste') {
    bins.waste += 1;
  }  else if (trash === 'recycling') {
    bins.recycling += 1;
  }  else if (trash === 'compost') {
    bins.compost += 1;
  }  else {
    return bins
  }
  return bins
};

let bins = {
  waste: 0, 
  recycling: 0, 
  compost: 0
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage('recycling', { waste: 4, recycling: 3, compost: 5 }));


