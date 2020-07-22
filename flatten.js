const eqArrays = (actualArray,expectedArray) => {

  let actualOutput = "";
  let expectedOutput = "";
 
  for(let i = 0 ; i < actualArray.length ; i++) {
 
     actualOutput += actualArray[i];
 
  }
 
  for(let j = 0 ; j < expectedArray.length ; j++){
 
     expectedOutput += expectedArray[j];
 
  }
 
  if(actualOutput === expectedOutput) {
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


 const flatten = (arr) => {

  let output = [];

  for(let i = 0 ; i<arr.length ; i++) {

      if(Array.isArray(arr[i]) !== true) {

        output.push(arr[i]);

      } else {

          output = output.concat(arr[i]);
      }

  }

  return output;

 };

 console.log(flatten([1, 2, [3, 4], 5, [6]]));
 assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);