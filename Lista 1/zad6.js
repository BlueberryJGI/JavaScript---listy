const assert = require('assert').strict;
function findLongestWordLength(word){
  if(typeof word !== 'string'){
    return "This is invalid parameter"
  }
  if (word.trim().length === 0){
    return "Empty string - cannot proceed"
  } 
  let wordArray = word.split(" ")
  let lengthCounter = 0;
  for (let one of wordArray){
    if (one.length > lengthCounter){
      lengthCounter = one.length;
    }
  }
  return lengthCounter;
}

// testy funckji
assert.strictEqual(findLongestWordLength(1), "This is invalid parameter");
assert.strictEqual(findLongestWordLength("This is a sentence"), 8);
assert.strictEqual(findLongestWordLength(""), "Empty string - cannot proceed");
assert.strictEqual(findLongestWordLength("a"), 1);
console.log("all tests passed");
