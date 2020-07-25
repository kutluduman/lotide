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


const assertArraysEqual = (arr1, arr2) => {

  if (eqArrays(arr1, arr2) === false) {

    console.log('🛑Failed : Arrays are not equal');

  }

  console.log('✅ Success : Arrays are equal');
 

};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));