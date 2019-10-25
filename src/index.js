'use strict';

const start = () => {
  console.log('Starting...');
  const $ = selector => document.querySelector(selector);
  // const { prepareArray } = require('./1-task');
  // const { findSymbol } = require('./2-task');
  // const { firstElements } = require('./5-task');
  const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [ 4, 5, 6],
    ['d', 'e', 'f'],
    [ 7, 8, 9],
  ];

  a.toStr = function () {
    const reversed = a.map(el => el.reverse().join(' '));
    return reversed.join('\n');
  }

  $('.container').innerText = a.toStr();

};

window.onload = start;








// const {  phonebook, findPhoneByName } = require(`./9-array`);
// console.log(phonebook)
// import msg from './msg';
// msg("Test message 22", document.getElementById('mymsg'));
//
// setTimeout(()=>{
//     // throw new Error('Eoeoeoeoeoe')
//     console.log('hello')
// }, 2000)
// console.log(`I'm a silly entry point 4`);







