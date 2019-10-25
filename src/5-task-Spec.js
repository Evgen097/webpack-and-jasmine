/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const {  firstElements } = require(`./${fileName}`);

describe( "1-task", function () {
  const cases = [
    [[[1, 2, 3], ['a', 'b', 'c'], [ 4, 5, 6], ['d', 'e', 'f'], [ 7, 8, 9]],
      [ 1, 'a', 4, 'd', 7 ]],
  ]


  it('should return symbol from a given arr', ()=> {

    cases.forEach(item => {
      expect(firstElements(item[0])).toEqual(item[1])
    });
  })

})








