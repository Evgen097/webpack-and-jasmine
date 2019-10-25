/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const {  phonebook, findPhoneByName } = require(`./${fileName}`);

describe( "9-array", function () {
  const cases = [
    { name: 'Some test person1', phone: '+380445554431' },
    { name: 'Some test person2', phone: '+380445554432' },
    { name: 'Some test person3', phone: '+380445554433' },
  ]

  it('should phonebook to be typeof array', ()=> {
    expect(Array.isArray(phonebook)).toEqual(true)
  })

  it('should findPhoneByName return phone', ()=> {
    cases.forEach(item => {
      phonebook.push(item);
    });

    cases.forEach(item => {
      const phone = findPhoneByName(item.name)
      expect(phone).toEqual(item.phone)
    });
  })

})








