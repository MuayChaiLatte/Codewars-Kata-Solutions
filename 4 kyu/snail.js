// DESCRIPTION

// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


// MY SOLUTION
  
snail = function(array) {
  let matrixSize = array.length
  if (matrixSize === undefined) {
    return []
  }
  let matrixTraversalInterface = {
    x: {
      coordinate: 0,
      positiveBound: matrixSize - 1,
      negativeBound: 0
    },
    y: {
      coordinate: 0,
      positiveBound: matrixSize - 1,
      negativeBound: 0
    },
    incrementationValue: {
      positive: 1,
      negative: -1
    },
    incrementCoordinate: function(inputArray,snailArray,axis,direction) {
      while (this[axis]['coordinate'] !== this[axis][direction + 'Bound'] + this['incrementationValue'][direction]) {  
        snailArray.push(inputArray[this['y']['coordinate']][this['x']['coordinate']])
        this[axis]['coordinate']+= this['incrementationValue'][direction]
      }
    }
  }
  let snailArray = []
  let axis = 'x'
  let incrementationDirection = 'positive'
  if (matrixSize % 2 === 0) {
    while (matrixTraversalInterface['x']['coordinate'] !== matrixSize/2 - 1  && matrixTraversalInterface['y']['coordinate'] !== matrixSize/2 + 1) {
      matrixTraversalInterface.incrementCoordinate(array,snailArray,axis,incrementationDirection)
      matrixTraversalInterface[axis][incrementationDirection + 'Bound'] -= matrixTraversalInterface['incrementationValue'][incrementationDirection]
      if (axis === 'y') {
        incrementationDirection = toggleIncrementationDirection(incrementationDirection)
      }
      axis = toggleAxis(axis)
    }
  }
  else {
    while (matrixTraversalInterface['x']['coordinate'] !== Math.floor(matrixSize/2) && matrixTraversalInterface['y']['coordinate'] !== Math.floor(matrixSize/2)) {
      matrixTraversalInterface.incrementCoordinate(array,snailArray,axis,incrementationDirection)
      matrixTraversalInterface[axis][incrementationDirection + 'Bound'] -= matrixTraversalInterface['incrementationValue'][incrementationDirection]
      if (axis === 'y') {
        incrementationDirection = toggleIncrementationDirection(incrementationDirection)
      }
      axis = toggleAxis(axis)
    }
  }
  return snailArray
}
function toggleAxis(currentAxis) {
  return {x: 'y', y: 'x'}[currentAxis]
}
function toggleIncrementationDirection(currentDirection) {
  return {positive: 'negative', negative: 'positive'}[currentDirection]
}

/*
cycle goes
x positive
y positive
x negative
y negative

if its x,
always has to be y
*/


console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  /*
  needs to know:
  axis - tells it x or y, which of the upper or lower bounds to select
  direction - tells it upper or lower bound, minus or positive incrementation

  */

  /*
  axis affects:
  coordinate chosen
  bound chosen

  incremenationD affects:
  upper or lower bound chosen
  */
  
  
  
  /*
  input array of subarrays
  output single array
  
  matrix of nxn
  
  (x,y) system, origin (0,0), right and down and positive
  
  investigate s
  
  start at (0,0)
  increase x until x = n-1, (n-1,0), go right
  increase y until y = n-1, (n-1,n-1), go down
  decreaes x until x = 0, (0,n-1), go left
  decrease y until y = 1, (0,1), go up
  increase x until x = n-2, (n-2,1) go right
  increase y until y = n-2, (n-2,n-2) go down
  
  odd matrices end in the center (floor n/2, floor n/2)
  even matrices end in the bottom left square from center (n/2 - 1, n/2 + 1)
  
  copy array
  set coordinates x = 0, y = 0
  set matrix size, n = array length
  while x!= n/2 and y != n/2
  push array[x][y]
  increase x
  
  increase x until rightside limit
  rightsidelimit -1
  change modified coordinate to y
  
  increase y until downside limit
  downside limit - 1
  decrease x until leftside limit
  leftside limit +1
  decrease y until upside limit
  upside limit +1
  repeat!

  do the x side then the 
  
  */
