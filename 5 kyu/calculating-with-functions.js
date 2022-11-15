// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));


// My Solution

function zero(arr) {
    if (arr === undefined) {
    return '0'
  }
  else {
    return Math.floor(eval('0'+arr.join('')))
  }
}
function one(arr) {
  if (arr === undefined) {
    return '1'
  }
  else {
    return Math.floor(eval('1'+arr.join('')))
  }
}
function two(arr) {
    if (arr === undefined) {
    return '2'
  }
  else {
    return Math.floor(eval('2'+arr.join('')))
  }
}
function three(arr) {
    if (arr === undefined) {
    return '3'
  }
  else {
    return Math.floor(eval('3'+arr.join('')))
  }
}
function four(arr) {
    if (arr === undefined) {
    return '4'
  }
  else {
    return Math.floor(eval('4'+arr.join('')))
  }
}
function five(arr) {
    if (arr === undefined) {
    return '5'
  }
  else {
    return Math.floor(eval('5'+arr.join('')))
  }
}
function six(arr) {
    if (arr === undefined) {
    return '6'
  }
  else {
    return Math.floor(eval('6'+arr.join('')))
  }
}
function seven(arr) {
    if (arr === undefined) {
    return '7'
  }
  else {
    return Math.floor(eval('7'+arr.join('')))
  }
}
function eight(arr) {
    if (arr === undefined) {
    return '8'
  }
  else {
    return Math.floor(eval('8'+arr.join('')))
  }
}
function nine(arr) {
    if (arr === undefined) {
    return '9'
  }
  else {
    return Math.floor(eval('9'+arr.join('')))
  }
}

function plus(num) {
  return ['+',num]
}
function minus(num) {
  return ['-',num]
}
function times(num) {
  return ['*',num]
}
function dividedBy(num) {
  return ['/',num]
}

/*
Accidentally came up with a slightly odd, but inefficient solution.
Calculations are actually handled by the individual number functions,
rather than the operations.

Function Breakdown

if no argument is passed
number function returns the number
the operation function takes in a number function as an argument
it should 

call a number func
call operator funct on number func
call number func on operator func return which called a number func

final number func should know, the operator and the other operand and its own number
*/