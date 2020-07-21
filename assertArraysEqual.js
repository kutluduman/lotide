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
 
 
 }


 const assertArraysEqual = (value) => {

  if(value) {

      console.log("Arrays are equal"); 

  } else {

    console.log("Arrays are not equal");
  }

 }

 assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));