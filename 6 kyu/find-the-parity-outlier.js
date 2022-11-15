// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// My Solution

function findOutlier(integers){
    if (Math.abs(integers[0]) % 2 == Math.abs(integers[1]) % 2) {
      return integers.find(number => Math.abs(number) % 2 != Math.abs(integers[0]) % 2)
    }
    else {
      return integers.find(number => Math.abs(number) % 2 != Math.abs(integers[2]) % 2)
    }
}
  
/*
input = array (array.length > 3) of integers, all odd or all even except for one, N
output N

find function
  if element0 % 2 === element1 % 2,
  return element % 2 != element0 % 2
  else return element % 2 != element3
*/