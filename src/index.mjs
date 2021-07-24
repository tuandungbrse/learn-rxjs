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

//------------------EXERCISES--------------------------
import ex12 from './ex12.mjs'
// console.log(ex12())

import ex14 from './ex14.mjs'
console.log(ex14())
