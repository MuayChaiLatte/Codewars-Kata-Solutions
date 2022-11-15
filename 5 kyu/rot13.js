// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// My Solution

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let messageArray = message.split('')
    return messageArray.map(element => {
      let lowerCaseElement = element.toLowerCase()
      if (alphabet.includes(lowerCaseElement)) {
        let alphaNum = alphabet.indexOf(lowerCaseElement)
        if (alphaNum < 13) {
          alphaNum += 13
        }
        else {
          alphaNum -= 13
        }
        if (lowerCaseElement === element) {
          return alphabet[alphaNum]
        }
        else {
          return alphabet[alphaNum].toUpperCase()
        }
      }
      else {
        return element
      }
    }).join('')
}

/*
input string of characters
output modified sting, letters rot13 ciphered, others ignored

convert string to array
for each character check if it is a letter included in alphabet
if yes
  find index of its match in alphabet
  if index less than 13
    add 13
  else
    minus 13
  if character uppercase
    return uppercase version
  else
    return lowercase
if no
  return character
  
return joined array

*/