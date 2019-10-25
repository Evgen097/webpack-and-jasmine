'use strict';

const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [ 4, 5, 6],
  ['d', 'e', 'f'],
  [ 7, 8, 9],
];

const firstElements = (arr, index = 0) => {
  const result = [];
  for (const item of arr) {
    const elem = item[index];
    result.push(elem);
  }
  return result;
}

console.log(firstElements(a));

module.exports = { firstElements };








