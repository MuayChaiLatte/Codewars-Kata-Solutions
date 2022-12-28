// DESCRIPTION 

// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
// Examples:

// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
// Notes:

//     try not to modify the input list of distances ls
//     in some languages this "list" is in fact a string (see the Sample Tests).


// MY SOLUTION

function chooseBestSum(t, k, ls) {
    
}

function myFunc() {
    
}

function largestValueOfAnArrayBelowALimit(array,limit) {
  return array.reduce((maxValue,element) => {
    if (element > maxValue && element <= limit ) {
        return element
    }
    else {
        return maxValue
    }
  },-Infinity) 
}

function sumOfTheElementsOfAnArray(array) {
    return array.reduce((sum,element) => sum+element,0)
}

function arrayOfAllCombinationsFromAnArray(set,combinationSize) {
    let arrayOfCombinations = []
    let sliceEnd = combinationSize - 2
    for (let i=0;i<=array.length-combinationSize; i++) {
        arrayOfCombinations.push(set.slice(i,))
    }
}

[1 2 3 4 5 6 7 8 9 10]

array length = 10
end start position = 2 = array length - combo length
combo size = 5 

iteration method
start position = 0
combo length = 4
array length = 10
sliceEnd = combo length - 2 + start position



array.slice(start,limit) + array[limit+1]
add to limit + 1 until array length reached
increment origina limit and start values
stop when limit+1 greater than last array member


function findUniqueValue(array,value) {
    return array.find(element => element !== value)
}





/*
put an element into the array
put another element into the array only if no other elements within the new array equal it  


3 inputs: integer, integer, array of integers

output: single integer

return the largest sum of combination number of integers less than the sum limit

from the integer array, create a new array of subarrays of all permutations of town visit combinations that satisfy town limit
sum 
    create a unique array of unique integers
    keep creating unique arrays until none left


reduce each of the subarrays in this new array to a sum integer

scan the array and return the largest integer less than the distance limit

*/