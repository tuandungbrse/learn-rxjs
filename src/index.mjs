Array.prototype.concatAll = function () {
  var results = []
  this.forEach(function (subArray) {
    results.push.apply(results, subArray)
  })

  return results
}

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.map(function (item) {
    return projectionFunctionThatReturnsArray(item)
  }).concatAll()
}

Array.prototype.reduce = function (combiner, initialValue) {
  var counter, accumulatedValue

  if (this.length === 0) {
    return this
  } else {
    if (arguments.length === 1) {
      counter = 1
      accumulatedValue = this[0]
    } else if (arguments.length >= 2) {
      counter = 0
      accumulatedValue = initialValue
    } else {
      throw 'Invalid arguments.'
    }

    while (counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++
    }

    return [accumulatedValue]
  }
}

//------------------EXERCISES--------------------------
import ex1 from './ex12.mjs'
import ex2 from './ex12.mjs'
import ex3 from './ex12.mjs'
import ex4 from './ex12.mjs'
import ex5 from './ex12.mjs'
import ex6 from './ex12.mjs'
import ex7 from './ex12.mjs'
import ex8 from './ex12.mjs'
import ex9 from './ex12.mjs'
import ex10 from './ex12.mjs'
import ex11 from './ex12.mjs'
import ex12 from './ex12.mjs'
import ex13 from './ex12.mjs'
import ex14 from './ex14.mjs'
import ex18 from './ex18.mjs'

// console.log(ex12())
// console.log(ex14())

console.log(ex18())
