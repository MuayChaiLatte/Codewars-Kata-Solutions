// DESCRIPTION 

// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).
// Value ranges

//     -10 000 000 < x < 10 000 000
//     -10 000 000 < y < 10 000 000

// Examples

//     Input: 42/9, expected result: 4 2/3.
//     Input: 6/3, expedted result: 2.
//     Input: 4/6, expected result: 2/3.
//     Input: 0/18891, expected result: 0.
//     Input: -10/7, expected result: -1 3/7.
//     Inputs 0/0 or 3/0 must raise a zero division error.

// Note

// Make sure not to modify the input of your function in-place, it is a bad practice.


// MY SOLUTION


function mixedFraction(s) {
    let arrayOfMixedFractionParts = arraySplitBySlashFromString(s)
    let numerator = convertStringToNumber(arrayOfMixedFractionParts[0]) 
    let denominator = convertStringToNumber(arrayOfMixedFractionParts[1])
   
    // The result can be made up of a sign followed by an integerPart a space and then a reduced properFraction
    // All of these components are conditionally part of the result so are initialised to ''
    let properFraction = ''
    let integerPart = ''
    let space = ''
    let sign = ''
    let result = ''
  
    // Check if denominator is 0 and throw error if necessary
    if (denominator === 0) {
      throw 'ZeroDivisionError'
    }
  
    // Check if numerator is 0 and modify result
    else if (numerator === 0) {
      result = '0'
    }
    else {
      // If only one is negative the result will be negative
      if (isOnlyOneOfTheseNumbersNegative(numerator,denominator)) {
        sign += '-'
      }
  
      // Take absolute values of numerator and denominators now that the negative values have been accounted for in the result
      numerator = Math.abs(numerator) 
      denominator = Math.abs(denominator)
  
      // The properFractionNumerator is the remainder of numerator divided by denominator
      let properFractionNumerator = numerator % denominator
  
      // If the numerator divided by denominator rounds down to 0, then the fraction is not improper and the integer part should remain blank
      // The integerPart is converted to string already because it is not used in subsequent calculations
      integerPart = convertNumberToString(Math.floor(numerator/denominator) || '')
      
      // If the properFractionNumerator was 0, then the properFraction need not be defined
      if (properFractionNumerator !== 0) {
        let properFractionDenominator = denominator
  
        // Check if fraction can be reduced
        let reductionFactor = highestCommonFactor(properFractionNumerator,properFractionDenominator)
        properFractionNumerator /= reductionFactor
        properFractionDenominator /= reductionFactor
        properFraction += convertNumberToString(properFractionNumerator) + '/' + convertNumberToString(properFractionDenominator)
      }
  
      // The space only needs to be added if both integerPart and properFraction are present
      if (integerPart && properFraction) {
        space = ' '
      }
  
      result += sign + integerPart + space + properFraction
    }
    return result
  }
  
  function highestCommonFactor(smallerNumber,largerNumber) {
    let startPoint = smallerNumber
    for (let i =  startPoint; i >= 1; i--) {
      if (isThisNumberDivisibleByAnother(smallerNumber,i) && isThisNumberDivisibleByAnother(largerNumber,i)) {
        return i
      }
    }
    return 1
  }
  
  function isThisNumberDivisibleByAnother(dividend,divisor) {
    return dividend % divisor === 0
  }
  
  
  function arraySplitBySlashFromString(string) {
    return string.split('/')
  }
  
  function convertStringToNumber(string) {
    return Number(string)
  }
  
  function convertNumberToString(number) {
    return number.toString()
  }
  
  function isOnlyOneOfTheseNumbersNegative(num1,num2) {
    return num1*num2 < 0
  }
  