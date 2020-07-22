const eqArrays = (actualArray,expectedArray) => {

  let actualOutput = "";
  let expectedOutput = "";
 
  for(let i = 0 ; i<actualArray.length ; i++) {
 
     actualOutput+=actualArray[i];
 
  }
 
  for(let j = 0 ; j<expectedArray.length ; j++){
 
     expectedOutput+= expectedArray[j];
 
  }
 
  if(actualOutput===expectedOutput) {
    return true;
  }
  return false;
 
 
 };


 const assertArraysEqual = (value) => {

  if(value) {

      console.log("Arrays are equal"); 

  } else {

    console.log("Arrays are not equal");
  }

 };


const letterPositions = function(sentence) {
  const results = {};
  
  for(let i = 0 ; i < sentence.length ; i++) {
    if(results[sentence[i]]){
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