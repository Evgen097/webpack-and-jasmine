/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const {  prepareArray } = require(`./${fileName}`);

describe( "1-task", function () {
  const cases = [
    [[[1, 2, 3], ['a', 'b', 'c'], [ 4, 5, 6], ['d', 'e', 'f'], [ 7, 8, 9]],
      `1 2 3\na b c\n4 5 6\nd e f\n7 8 9`]
  ]


  it('should format the string', ()=> {

    cases.forEach(item => {
      expect(prepareArray(item[0])).toEqual(item[1])
    });
  })

})








