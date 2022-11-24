// DESCRIPTION

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


// MY SOLUTION

function zeros (n) {
    let numberOfZeros = 0    
    for (i=1;i<=Math.floor(Math.log(n)/Math.log(5)); i++) {
      numberOfZeros += Math.floor(n/Math.pow(5,i))
    }
    return numberOfZeros
}



// SOLUTION EXPLANATION

// For a factorial n!, the number of trailing zeros it possses, Z is equal to:

// Z = sumOf(floorFunc(n/5^k))

// where 
//   sumOf(x(k)) is the sum of the evaluation of x for k = 1 to k = kMax
//   kMax = floorFunc(log5(n))
//   floorFunc(x)  is the greatest integer less than or equal to the evaluation of x