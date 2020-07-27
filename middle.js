const eqArrays = require('./eqArrays');
 
const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {

  let arrMiddle = [];

  let indexMiddle = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return arrMiddle;
  } else if (arr.length % 2 === 0) {
    arrMiddle.push(arr[(indexMiddle) - 1]);
    arrMiddle.push(arr[indexMiddle]);
  } else {
    arrMiddle.push(indexMiddle);
  }

  return arrMiddle;

};


module.exports = middle;