// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// My Solution

function moveZeros(arr) {
    let copy = arr.filter(elem => elem !== 0)
    let numOfZeros = arr.length - copy.length
    for (let i = 1; i <= numOfZeros; i++) {
      copy.push(0)
    }
     return copy
}