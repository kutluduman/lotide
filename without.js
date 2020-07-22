const eqArrays = function(arr1, arr2) {
   if (arr1.length !== arr2.length) {
     return false;
   }
   for (let i = 0; i < arr1.length; i++) {
     if (arr1[i] !== arr2[i]) {
       return false;
     }
   }
   return true;
 };
 
 const assertArraysEqual = (value) => {

  if(value) {

      console.log("Arrays are equal"); 

  } else {

    console.log("Arrays are not equal");
  }

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
