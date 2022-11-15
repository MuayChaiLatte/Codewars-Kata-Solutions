// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution

function solution(str){
    let stringArray = str.split('') //Convert string into an array and assign to a new variable
    stringArray.reverse() //Reverse order of members in array with array method
    str = stringArray.join('') //Convert reversed array back to string and reassign string variable
    return str //Return reversed string
}