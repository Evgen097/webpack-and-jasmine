/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const {  findSymbol } = require(`./${fileName}`);

describe( "1-task", function () {
  const cases = [
    [[[1, 2, 3], ['a', 'b', 'c'], [ 4, 5, 6], ['d', 'e', 'f'], [ 7, 8, 9]],
      3, 3],
    [[[1, 2, 3], ['a', 'b', 'c'], [ 4, 5, 6], ['d', 'e', 'f'], [ 7, 8, 9]],
      'e', 'e']
  ]


  it('should return symbol from a given arr', ()=> {

    cases.forEach(item => {
      expect(findSymbol(item[0], item[1])).toEqual(item[2])
    });
  })

})








