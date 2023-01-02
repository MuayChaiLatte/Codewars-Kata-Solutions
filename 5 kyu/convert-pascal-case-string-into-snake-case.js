// DESCRIPTION 

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
// Examples

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"


// MY SOLUTION

function toUnderscore(string) {
    if (isItANumber(string)){ // Handles edge case of number input
      return convertToString(string) // Immediately returns the number as a string
    }
  
    let arrayOfCharacters = arrayOfCharactersFromString(string) // separate string into characters to allow iteration over its characters
    let arrayOfSnakeCaseCharacters =  replaceUppercaseLettersWithUnderscoreThenLowercase(arrayOfCharacters) // convert character array to snakecase array
    let snakeCaseString = convertArrayOfCharactersToString(arrayOfSnakeCaseCharacters) // Join characters in array to make string
    return snakeCaseString
  }
  
  function arrayOfCharactersFromString(string) {
    return string.split('')
  }
  
  function replaceUppercaseLettersWithUnderscoreThenLowercase(array) {
    return array.map((character,index) => {
      let newCharacter = character
      if (isItACapitalLetter(newCharacter)) {
        newCharacter = makeLowerCase(newCharacter)
        if (isNotFirstArrayElement(index)) {
          newCharacter = addUnderscoreToBeginningOfCharacter(newCharacter)
        }
      }
        return newCharacter
    })
  }
  
  function isItACapitalLetter(letter) {
    return letter !== letter.toLowerCase()
  }
  
  function convertToString(input) {
    return input.toString()
  }
  
  function isItANumber(input) {
    return typeof input === 'number'
  }
  
  function makeLowerCase(letter) {
    return letter.toLowerCase()
  }
  
  function convertArrayOfCharactersToString(array) {
    return array.join('')
  }
  
  function addUnderscoreToBeginningOfCharacter(character) {
    return '_' + character
  }
  
  function isNotFirstArrayElement(index) {
    return index !== 0
  }
  