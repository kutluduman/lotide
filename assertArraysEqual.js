const eqArrays = require('./eqArrays');


const assertArraysEqual = (arr1, arr2) => {

  if (eqArrays(arr1, arr2) === false) {

    console.log('🛑Failed : Arrays are not equal');

  }

  console.log('✅ Success : Arrays are equal');
 

};

module.exports = assertArraysEqual;