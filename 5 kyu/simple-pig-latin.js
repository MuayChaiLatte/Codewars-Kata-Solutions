// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// My Solution

function pigIt(str){
    let wordArray = str.split(' ')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return wordArray.map(word => {
      if (alphabet.includes(word[0].toLowerCase())) {
        return word.slice(1) + word[0] + 'ay'
      }
      else {
        return word
      }
    }).join(' ')
}
