// DESCRIPTION

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// MY SOLUTION

function firstNonRepeatingLetter(s) {
    let arrayOfLowerCaseCharacters = s.toLowerCase().split('') // Make all characters to ensure comparison is case-insensitive
    let indexOfFirstNonRepeatingLetter = arrayOfLowerCaseCharacters.findIndex(character => isItANonRepeatingLetterInAString(character,s))
    if (indexOfFirstNonRepeatingLetter < 0) { // no non repeating letters found in string
      return ''
    }
    else {
      return s[indexOfFirstNonRepeatingLetter] // Using index and original string ensures character is returned in correct case
    }
}
  
function isItANonRepeatingLetterInAString(letter,string) {
      let numberOfOccurencesOfLetterInArray = string.toLowerCase().split(letter.toLowerCase()).length - 1 // Everything made lowercase to ensure comparison is case-insensitive
      return (numberOfOccurencesOfLetterInArray <= 1) // if occurences are less than or equal to one, the letter is unique within the array
}