
const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [ 4, 5, 6],
  ['d', 'e', 'f'],
  [ 7, 8, 9],
];

const prepareArray = arr => {
  let str = '';
  for (const item of arr) {
    for (let i = 0; i < item.length; i++) {
      str +=  i === 0 ? `${item[i]}` : ` ${item[i]}`;
    }
    if (arr.indexOf(item) !== arr.length - 1) str += '\n';
  }
  return str;
}

console.log(prepareArray(a));
module.exports = { prepareArray };








