let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};


const head = (arr) => {

return arr[0];

}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);