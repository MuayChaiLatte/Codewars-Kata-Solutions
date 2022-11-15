// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


// My Solution

var maxSequence = function(arr){
    if (!arr || arr.every(number => number<0)) { //Check if array is empty or all its elements are negative
      return 0
    }
    else if (arr.every(number => number>0)) { //Check if all array elements are positive
      return arr.reduce((sumTotal,nextElement) => sumTotal + nextElement,0)
    }
    else { // Find all possible contiguous subsequence sums
      let contiguousSubsequenceSumArray = []
      for (let index=0; index < arr.length; index++) { // Loop over all elements in array
        let subsequenceCounter = index // determines contiguous subsequence length
        while (subsequenceCounter < arr.length) { // Generate all possible contiguous subsequences and their sums from each element as a start point and store them in the sum array
          let contiguousSubsequence = arr.slice(index,subsequenceCounter+1)
          let contiguousSubsequenceSum = contiguousSubsequence.reduce((sumTotal,nextElement) => sumTotal + nextElement,0)
          contiguousSubsequenceSumArray.push(contiguousSubsequenceSum)
          subsequenceCounter++
        }
      }
      let maxSum = Math.max(...contiguousSubsequenceSumArray) // Find maximum contiguous subsequence sum
      return maxSum
    }
}
  
  /*
  Not that happy with my solution, quite brute force-y and inelegant.
  
  Solution Explanation

  First eliminate 'easy' cases of all positive, all negative, or no integers in array then;
  
  
  All possible contiguous subsequence sum values for an array of length N+1 are equal to:
  element0, element0+element1, ... element0+element1+...elementN
  element1, element1+element2, ... element1+element2+...elemenetN
  ...
  elementN-3, elementN-3+elementN-2, ... elementN-3+elementN-2+...elementN
  ...
  elementN
  
  
  Therefore the maximum sum is the largest of these values
  */