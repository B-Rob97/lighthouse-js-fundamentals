const loopyLighthouse = function(range, multiples, words) {
  let x = range[0];

  const isMultipleOfFirst = (x, multiples) => x % multiples[0] === 0;
  const isMultipleOfSecond = (x, multiples) => x % multiples[1] === 0;
  
  while (x <= range[1]) {
    let output =
    (isMultipleOfFirst(x, multiples) && isMultipleOfSecond(x, multiples)) ? `${words[0]}${words[1]}` :
      (isMultipleOfFirst(x, multiples)) ? words[0] :
        (isMultipleOfSecond(x, multiples)) ? words[1] :
          x;
    console.log(output);
    x++;
  }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);