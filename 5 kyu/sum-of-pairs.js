// DESCRIPTION 

// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


// MY SOLUTION 

function sumPairs(ints,s) {
    let arrayOfIntegers = ints.slice()
    let targetSum = s
    let cache = {}
    let answerPair = undefined
    for (i = 0; i < arrayOfIntegers.length; i++) {
      let currentElement = arrayOfIntegers[i]
      if (cache[currentElement] && cache[currentElement][0] === 'sumPair') { // By confirming cache value is a sumPair, prevents duplicate array elements giving false positives
        answerPair = [cache[currentElement][1],currentElement]
        break
      }
      else {
        let sumPair = valueNeededToMakeTargetSum(currentElement,targetSum)
        cache[currentElement] = ['element',sumPair]
        cache[sumPair] = ['sumPair',currentElement]
      }
    }
    return answerPair
  }
  
  function valueNeededToMakeTargetSum(startValue,targetSum) {
    return targetSum - startValue
  }