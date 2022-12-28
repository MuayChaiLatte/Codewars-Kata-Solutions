// DESCRIPTION 

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
// Task

// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
// Example:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

// The form of the examples may change according to the language, see "Sample Tests".
// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


// MY SOLUTION

function listSquared(m, n) {
    let answerArray = []
    for (let i=m; i <=n; i++) {
      let arrayOfDivisors = arrayOfAllDivisorsOfN(i)
      let sumOfSquaredDivisors = sumOfSquaredArrayElements(arrayOfDivisors)
      if (isItASquareNumber(sumOfSquaredDivisors)) {
        answerArray.push([i,sumOfSquaredDivisors])
      }
    }
    return answerArray
  }
  
function sumOfSquaredArrayElements(array) {
    return array.reduce((sum,element) => sum + Math.pow(element,2),0)
}
  
function arrayOfAllDivisorsOfN(n) {
    let array = []
    for (let i=1; i <= Math.round(Math.sqrt(n)); i++) { // Check which integers from 1 to the square root of n are divisors of n
      if (n % i === 0) { // If n is divisible by i, then i must be a divisor
        array.push(i) // Record the divisor in the array
        if (n/i !== i) { // Prevents duplication of square root divisors in the array
          array.push(n/i)
        }
      }
    }
    return array
}
  
function isItASquareNumber(n) {
    let squareRoot = Math.sqrt(n)
    return Math.round(squareRoot) === squareRoot // If a square root, the rounded value should be exactly equal to the unrounded
}
  