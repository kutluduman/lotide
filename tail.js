let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};


const tail = (arr) => {

arr.shift();

return arr;



};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
assertEqual(result.length, 2);