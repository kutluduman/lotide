const eqArrays = (actualArray,expectedArray) => {

  if(actualArray.length !== expectedArray.length) {
    return false;
  }
 
  for (let i = 0; i < actualArray.length; i++) {
 
 for(let j = 0 ; j < expectedArray.length ; j++) {

  if (actualArray[i] !== expectedArray[i]) {
    return false;
      }

    }
     
  }
 return true;
  
};
 
 const assertArraysEqual = (arr1, arr2) => {

  if(eqArrays(arr1, arr2) === false) {

     console.log('🛑Failed : Arrays are not equal');

  } 

    console.log('✅ Success : Arrays are equal');
  

 };


 const without = (source, itemsToRemove) => {
  

  for(let i = 0 ; i < source.length ; i++) {
        
     for(let j = 0 ; j < itemsToRemove.length ; j++) {

        if(source[i] === itemsToRemove[j]) {

          source.splice(i,1);

        }

     }
      
  }

    return source ;
  

 };

 assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
 

 const words = ["hello", "world", "lighthouse"];
 without(words, ["lighthouse"]); // no need to capture return value for this test case
 // Make sure the original array was not altered by the without function
 assertArraysEqual(words, ["hello", "world", "lighthouse"]);
