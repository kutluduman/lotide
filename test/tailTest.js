const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
assertEqual(result.length, 2);