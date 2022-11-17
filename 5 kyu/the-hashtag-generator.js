// DESCRIPTION

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// MY SOLUTION

function generateHashtag (str) {
    let CapitalisedStringWithoutSpaces = str.split(' ') // Make array of words ignoring spaces between words but includes '' as elements where consecutive spaces present
      .filter(word => word !== '') // Removes '' elements
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1) // Capitalises first letter of every word in the array
      })
      .join('') // Converts word array into a string with no spaces
    if (CapitalisedStringWithoutSpaces.length >= 140 || CapitalisedStringWithoutSpaces === '') { // Returns false if string length is too long or if it only contained whitespace
      return false
    }
    else {
      return '#' + CapitalisedStringWithoutSpaces // Adds hashtag to string
    }       
}