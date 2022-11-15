// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//My solution

function positiveSum(arr) { //Function to return the sum of all positive numbers within a given array
    let arrayTotalSum = 0 //Inital sum of array set to 0
   for (i = 0; i < arr.length; i++){ //Iterate through each array member to the end
    if (arr[i] >= 0) { //Check if the array member is positive
      arrayTotalSum+= arr[i] //If positive, add its value to the total array sum
    }
     else{ //Otherwise do nothing and continue iterating
       
     }
   }
    return arrayTotalSum //Return the total array sum value
  }