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


const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").h, [0]);