// DESCRIPTION

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


// MY SOLUTION

function scramble(str1, str2) {
  
  let requiredCharactersForRearrangement = createRecordOfCharacterInstancesInAString(str2)
  let charactersAvailableForRearrangement = createRecordOfCharacterInstancesInAString(str1)
  return areAllTheRequiredCharactersAvailable(requiredCharactersForRearrangement,charactersAvailableForRearrangement)
}


function createRecordOfCharacterInstancesInAString(string) {
  let record = {}
  string.split('').forEach(character => {
    if (character in record) {
      record[character]++
    }
    else {
      record[character] = 1
    }
  })
  return record
}

function areAllTheRequiredCharactersAvailable(requiredCharacters,availableCharacters) {
  let arrayOfCharacters = Object.keys(requiredCharacters)
  return arrayOfCharacters.every(character => {
    return requiredCharacters[character] === availableCharacters[character]
  })
}
  
  /*
  
  input 2 strings
  output boolean
  
  check if there are at least as many copies of every letter in string 2 as there is in string 1
  
  consider performance
  
  possible solutions
  use sets (only stores unique values) if all the values in set2 are present in set 1, then need to check if every value has equal 
  
  
  */