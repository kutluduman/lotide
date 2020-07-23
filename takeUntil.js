const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

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

const takeUntil = (array, predicate) => {
  const output = [];
  for(let each of array) {
  if(predicate(each)) {
    return output;
  }

    output.push(each);
  }

};

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1,x => x < 0),[1,2,5,7,2]);
assertArraysEqual(takeUntil(data2,x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);