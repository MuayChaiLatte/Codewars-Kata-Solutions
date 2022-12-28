// DESCRIPTION 

// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

// You may assume that the input will always be valid.
// Examples

// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0

// Remarks
// JavaScript, C++, R, PureScript, COBOL

// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.


// MY SOLUTION

var lastDigit = function(str1, str2){ 
    /*
    The last digit of any base raised to any power will cycle through a small set of values
    e.g. with base= 2: lastDigit(2^1) = 2, lastDigit(2^2) = 4, lastDigit(2^3) = 8, lastDigit(2^4) = 6, lastDigit(2^5) = 2...

    Therefore the last digit of any exponent can be found by finding the last digit cycle.
    By using BigInt to account for very large powers, the remainder of the pwoer divided by the number of last digit cycle members indicates which last digit the exponent will have
    */

    let base = lastDigitOfANumber(str1)
    let power = BigInt(str2)
    if (power === 0n) { // Handles edge case of x^0
      return 1
    }
    let lastDigitOfExponent = lastDigitOfANumber(str1)
    let arrayOfLastDigitExponentCycleValues = []
    for (let i = 0; !arrayOfLastDigitExponentCycleValues.includes(lastDigitOfExponent); i++) { //Populates last digit cycle array, ends when a value already recorded in the array is produced
        arrayOfLastDigitExponentCycleValues[i] = lastDigitOfExponent
        lastDigitOfExponent = lastDigitOfANumber(lastDigitOfExponent*base)
    }
    let positionInCycle = power - 1n 
    if (power>BigInt(arrayOfLastDigitExponentCycleValues.length)) {
        positionInCycle %= BigInt(arrayOfLastDigitExponentCycleValues.length)
    }
    positionInCycle = Number(positionInCycle)
    return arrayOfLastDigitExponentCycleValues[positionInCycle]
}

function lastDigitOfANumber(number) {
    if (typeof number !== 'string') {
        number = number.toString()
    }
    let lastDigit = Number(number[number.length-1])
    return lastDigit
}