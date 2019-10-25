'use strict';

const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [ 4, 5, 6],
  ['d', 'e', 'f'],
  [ 7, 8, 9],
];

const findSymbol = (arr, sym) => {
  for (const item of arr) {
    const result = item.find(item => item === sym);
    if (result) return result;
  }
}

console.log(findSymbol(a, 3));
module.exports = { findSymbol };








