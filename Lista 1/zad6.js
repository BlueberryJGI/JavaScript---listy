function findLongestWordLength(word){
  if(typeof word !== 'string'){
    return "This is invalid parameter"
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
