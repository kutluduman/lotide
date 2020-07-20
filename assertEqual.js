
let success = "✅✅✅Assertion passed";
let failure = "🛑🛑🛑Assertion failed";

const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`${success}`);
  } else {
    console.log(`${failure}`);
  }
};

assertEqual('Lighthouse Labs','Bootcamp');
assertEqual(1,1);
