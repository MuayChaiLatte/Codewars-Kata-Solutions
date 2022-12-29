// DESCRIPTION

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text
// Hint:

// See Fibonacci sequence
// Ref:

// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216


// MY SOLUTION

function perimeter(n) {
    /*
    for n, n+1 squares
    total perimeter = (sum of fibonacci series up to and including F(n)) * 4
    where F(0) = F(1) = 1
    
    sum of fibonacci series up to and including F(n) = F(n) + F(n+1) - 1 = F(n+2) - 1
    */
      let sumOfPerimeters = 4 * (findTheNthFibonacciNumber(n+2) - 1) // Function called without memo argument so a new memo object is created upon execution
      return sumOfPerimeters
  }
  
  function findTheNthFibonacciNumber(n,memo) {
      memo = memo || {} // Records previously calculated fibonacci numbers to improve algorithim efficiency
      if (n <= 1) { // Ensures F(0) and F(1) have value 1
          return 1
      }
      if (memo[n] === undefined) { // If the fibonacci number has not been seen, recursively calculate it and record it
          memo[n] = findTheNthFibonacciNumber(n-1,memo) + findTheNthFibonacciNumber(n-2,memo) // Current memo up to this point included in function call
      }    
      return memo[n]
  }
