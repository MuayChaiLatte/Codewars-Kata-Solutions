// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// My Solution

function getCount(str) {
    return str.split('').reduce((vowelCount,letter) => {
      if (letter == 'a' || letter == 'e' || letter == 'o' || letter == 'i' || letter == 'u') {
        return vowelCount+= 1
      }
      return vowelCount
    },0)
}