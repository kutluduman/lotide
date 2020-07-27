const assertEqual = require('./assertEqual');

const tail = (arr) => {

  arr.shift();

  return arr;

};

module.exports = tail;