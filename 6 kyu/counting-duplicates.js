// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// My Solution

function duplicateCount(text){
    let seenOnce = []
    let seenMoreThanOnce = []
    let characterArray = text.split('')
    characterArray.forEach(character => {
      character = character.toLowerCase()
      if (!seenOnce.includes(character)) {
      seenOnce.push(character)
      }
      else if (!seenMoreThanOnce.includes(character)) {
      seenMoreThanOnce.push(character)
      }
    })
    return seenMoreThanOnce.length
}

/*
convert string to character array
iterate through array
check if character seen before
  if no
    store in mem1
  if yes
    check if in mem2
      if no
      store in mem 2
return mem 2 length
    
*/