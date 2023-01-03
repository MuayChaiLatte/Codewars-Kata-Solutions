function isMerge(s,part1,part2) {
    /*
    A merge is only possible if 3 conditions are met:
    1) characters are in the correct order for part1
    2) characters are in the correct order for part2
    3) there are exactly the amount and type of characters to make s, contained in part1 and part2
    */
  
    let targetString = s
    let string1 = part1
    let string2 = part2
    let frequencyOfTargetCharacters = recordOfFrequenciesOfCharacters(targetString,{})
    let frequencyOfString1Characters = recordOfFrequenciesOfCharacters(part1,{})
    let frequencyOfAllAvailableCharacters = recordOfFrequenciesOfCharacters(part2,frequencyOfString1Characters)
    return charactersAreInRightOrder(string1,targetString)
      && charactersAreInRightOrder(string2,targetString)
      && exactlyTheAmountOfTargetCharactersAvailable(frequencyOfTargetCharacters,frequencyOfAllAvailableCharacters)
  }
  
  function exactlyTheAmountOfTargetCharactersAvailable(targetCharacterFrequency,availableCharacterFrequency) {
    let arrayOfUniqueTargetCharacters = Object.keys(targetCharacterFrequency)
    return arrayOfUniqueTargetCharacters.every(character => 
      targetCharacterFrequency[character] === availableCharacterFrequency[character]
      )
  }
  
  function recordOfFrequenciesOfCharacters(string,initialRecord) { // Using an initial record allows the results from part2 to be combined with part1, and kept blank if not necessary
    for (let i= 0; i<string.length; i++) {
      let character = string[i]
      if (character in initialRecord) {
        initialRecord[character] += 1
      }
      else {
        initialRecord[character] = 1
      }
    }
    return initialRecord
  }
  
  function makeArrayOfCharacters(string) {
    return string.split('')
  }
  
  
  function charactersAreInRightOrder(string,target) {
    let targetCharacterArray = makeArrayOfCharacters(target)
    let lastIndexSeen = 0
    for (let i=0; i< string.length; i++) {
      let character = string[i]
      let indexFound = targetCharacterArray.indexOf(character,lastIndexSeen)
      if (indexFound >= 0) { // If the index is less than 0 it could not be found in the target
        lastIndexSeen = indexFound // updating lastIndexSeen ensures duplicate characters can not cause false negatives/positives
      }
      else {
        return false
      }
    }
    return true
  }