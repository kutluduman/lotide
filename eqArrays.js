const assertEqual = require('./assertEqual');

const eqArrays = (actualArray,expectedArray) => {

  if (actualArray.length !== expectedArray.length) {
    return false;
  }
 
  for (let i = 0; i < actualArray.length; i++) {
 
    for (let j = 0; j < expectedArray.length; j++) {

      if (actualArray[i] !== expectedArray[i]) {
        return false;
      }

    }
     
  }
  return true;
  
};

module.exports = eqArrays;