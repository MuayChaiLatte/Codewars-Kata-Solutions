// DESCRIPTION 

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
// Examples

// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246


// MY SOLUTION

function ipsBetween(start, end){
    /*
    IPv4 values are written in base 2^8 as opposed to the standard base 10.
    
    So each period-separated 'digit' of an address is equal to a base 10 value of its value
    multiplied by (2^8)^index.
    Where index starts from right to left at 0
    
    Convert each digit of the ip address to base 10, find the differences between the digits and
    sum up the differences to find the number of addresses.
    */
    let arrayOfStartIPv4Digits = arrayOfPeriodSeparatedSubstringsFromString(start)
    let arrayOfEndIPv4Digits = arrayOfPeriodSeparatedSubstringsFromString(end)
    let arrayOfDifferencesBetweenIPv4Digits = arrayOfDifferencesBetweenStringIntegersOfAnArrays(arrayOfEndIPv4Digits,arrayOfStartIPv4Digits)
    let numberOfAddresses = convertArrayOfDifferencesBetweenIPv4StringsToBase10Value(arrayOfDifferencesBetweenIPv4Digits)
    return numberOfAddresses
  }
  
  function arrayOfPeriodSeparatedSubstringsFromString(string) {
    return string.split('.')
  }
  
  function arrayOfDifferencesBetweenStringIntegersOfAnArrays(array1,array2) {  // array1 must be the larger IPv4 address, returned array is made up of numbers
    return array1.map((element,index) => {
      return Number(element) - Number(array2[index])
      })
  }
  
  function convertIPv4DigitInArrayToBase10Number(IPv4Digit,digitPosition) { 
    return IPv4Digit*Math.pow(Math.pow(2,8),digitPosition)
  }
  
  function convertArrayOfDifferencesBetweenIPv4StringsToBase10Value(array) {
    return array
      .slice() // Makes copy of input array so it is not mutated by the reverse method
      .reverse() // Array is reversed so the indices can be referenced as digit position in the base 10 conversion
      .reduce((difference,element,index) => {
      return convertIPv4DigitInArrayToBase10Number(element,index) + difference
    },0)
  }