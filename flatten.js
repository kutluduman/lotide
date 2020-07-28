const eqArrays = require('./eqArrays');


const assertArraysEqual = (arr1, arr2) => {

  if (eqArrays(arr1, arr2) === false) {

    console.log('🛑Failed : Arrays are not equal');

  }

  console.log('✅ Success : Arrays are equal');
 

};


const flatten = (arr) => {

  let output = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i]) !== true) {

      output.push(arr[i]);

    } else {

      output = output.concat(arr[i]);
    }

  }

  return output;

};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;