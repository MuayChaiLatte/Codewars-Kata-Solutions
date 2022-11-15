// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

//My Solution
function even_or_odd(number) {
    if (number % 2 == 0) { //All even integers should return a remainder of 0 when divided by 2
      return 'Even'
    }
    else { //If the remainder is not 0, the integer must be odd
      return 'Odd'
    }
  }