// DESCRIPTION

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// Some Examples of Return:

// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 

// Note:

//     You can see examples for your language in "Sample Tests".


// MY SOLUTION

function productFib(prod){
    if (prod === 0) { // Handles single edge case not covered by code
      return [0,1,false]
    }
    let fibonacciSequenceRange = fibonacciSequenceArrayGenerator(prod) // The 2 consecutive integers must be less than or equal to the product itself, so generate the sequence using prod as an upper bound
    let firstFibonacciNum = fibonacciSequenceRange.find((element,index) => { // Returns of the first member of the sequence found, that when multiplied by its successor gives a value greater than or equal to prod
      return element*fibonacciSequenceRange[index+1] >= prod 
    })
    let secondFibonacciNum = fibonacciSequenceRange.find((element,index) => { // Returns associated successor to first member above
      return element*fibonacciSequenceRange[index-1]  >= prod
    })
    let answer = [firstFibonacciNum,secondFibonacciNum] // Convert values to correct answer format
    if (firstFibonacciNum*secondFibonacciNum === prod) { // Check if sequence members exactly create prod when multiply
      answer.push(true)
    }
    else { // Otherwise add false to answer
      answer.push(false)
    }
    return answer
}
  
function fibonacciSequenceArrayGenerator(upperBound) { // Sequence generated until last member that is less than or equal to upperBound
    let array = [0,1] // Set F(0) = 0 and F(1) = 1
    let latestFibonacciNumberIndex = 2 
    while (upperBound > array[array.length-1]) { // Continue looping as long as upperBound is greater than last array member
      let latestFibonacciNumber = array[latestFibonacciNumberIndex-1] + array[latestFibonacciNumberIndex-2] // Sum the 2 consecutive previous members to produce the latest member
      array.push(latestFibonacciNumber) // Add latest sequence member to end of array
      latestFibonacciNumberIndex++ // Increment latest index to produce next number in sequence
    }
    return array
}


  /*
  THOUGHTS
  
  Yet again, my answer was too brute-force for my liking, need to address something in how
  I approach the problems, I may attempt this one and maximum subarray sum again in future 
  since they are similarly inelegant
  */