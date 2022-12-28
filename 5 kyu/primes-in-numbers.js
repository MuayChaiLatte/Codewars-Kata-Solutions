// DESCRIPTION 

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


//MY SOLUTION

function primeFactors(n) {
    let primeFactorDecomposition = ''
    let currentPrimeFactorDivisor = 2
    let currentPrimeFactorIndex = 0
    let currentDividend = n
    let lastPrimeFactorDivisor = undefined
    while (currentPrimeFactorDivisor != lastPrimeFactorDivisor) { // Largest prime factor is the value of currentDividend when it is prime, this line ensures the loop is only broken after this prime factor is recorded
        if (isNum1DivisibleByNum2(currentDividend,currentPrimeFactorDivisor)) {
            currentPrimeFactorIndex++
            currentDividend /= currentPrimeFactorDivisor
        }
        else {
            primeFactorDecomposition += createPrimeFactorBracketString(currentPrimeFactorDivisor,currentPrimeFactorIndex)
            lastPrimeFactorDivisor = currentPrimeFactorDivisor 
            if (currentDividend !== 1) { // If currentDividend is 1, largest and final prime factor has been found, currentPrimeFactorDivisor is not updated so loop will end
                currentPrimeFactorDivisor = nextHighestPrimeNumber(currentPrimeFactorDivisor)
                currentPrimeFactorIndex = 0
            }                       
        }
    }
    return primeFactorDecomposition
}
function isItAPrimeNumber(number) {
    let upperBoundForPrimeCheck = Math.round(Math.sqrt(number)) // Of any 2 factors, a and b, of a number, one of the factors must be less than or equal to the number's square root, only values up to this are checked for efficiency
    for (let i=2; i <=upperBoundForPrimeCheck; i++) {
        if (number%i === 0) {
            return false
        }
    }
    return true
}


function nextHighestPrimeNumber(startNumber) {
    let testValue = startNumber+1
    while (!isItAPrimeNumber(testValue)) {
        testValue++
    }
    return testValue
}

function isNum1DivisibleByNum2(num1,num2) {
    return num1 % num2 === 0
}

function createPrimeFactorBracketString(primeFactor,index) {
    let string = ''
    if (index > 0) {
        string += `${primeFactor}`
        if (index > 1) {
            string += `**${index}`
        }
        string = '(' + string + ')'
    }
    return string
}




/*
input, single positive integer > 1
output string of parentheses including numbers

divide number by lowest prime
if it is divisible
    record the prime factor
    divide resulting quotient number by lowest prime again
    ...
else
    find next highest prime
    divide number by next highest prime
stop when current prime factor is greater than or equal to half the current quotient number


*/