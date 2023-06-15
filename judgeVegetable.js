const judgeVegetable = function (vegetables, metric) {
  let best = 0;
  let veggieKing = '';
  for (let vegetable of vegetables) {
    if (vegetable[metric] > best) {
      best = vegetable[metric];
      veggieKing = vegetable.submitter;
    }
  }
  return veggieKing;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 0,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));