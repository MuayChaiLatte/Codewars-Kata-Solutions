// DESCRIPTION 

// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!


// MY SOLUTION 

function pickPeaks(arr){
    let positionAndPeaks = {pos: [], peaks: []}
    arr.forEach((element,index) => {
        if (isNum1LowerThanNum2())
    })
}
  
  
function isNum1LowerThanNum2(num1,num2) {
    return num1 < num2
  }
  
  function addElementToEndOfAnArray(element,array) {
    array.push(element)
  }
  
  function recordNewPeakPosition(peakPosition) {
    addElementToEndOfAnArray(peakPosition,positionsAndPeaks.pos)
  }
  
  function recordNewPeakValue(peakValue) {
    addElementToEndOfAnArray(peakValue,positionsAndPeaks.peaks)
  }
  
  function recordPeakandPosition(element,index) {
    recordNewPeakPosition(index)
    recordNewPeakValue(element)
  }
    
  
  /*
  for a number to be a peak
  it has to have a lower number either side of it,
  aka the subarray between it and the first higher number must contain a lower number
  aka the subarray between it and the first lower number must contain no higher numbers
  
  
  input array of integers
  output, object, string-array pair
  
  do not mutate array
  
  first and last elements of array ignored
  examine each element
    if there is no previous element
      examine next element
    if previous element lower
      if there is no next element
        return
      if next element lower
        record current element value in peaks property array
        record current element position in pos property array
        examine element after next element
      else if next element the same
        check element after next element
      else next element higher
        examine next element, only need to check element after next element this time
    else if previous element the same
      check element before previous element
    else previous element higher
      examine next element
      
  
  
  */