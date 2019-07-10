// 1. Counting Sheep
// const countingSheep = function(numSheep) {
//   if (numSheep === 0) {
//     console.log(`All sheep jumped over the fence.`)
//     return
//   }
//   console.log(`${numSheep}: Another sheep jumped over the fence.`)
//   countingSheep(numSheep - 1)
// }
// countingSheep(3)


// 2. Power Calculator
const powerCalculator = function(base, exponent) {
  if (exponent < 0) {
    console.log(`Exponent should be >= 0`)
    return
  }
  // for (let i = 1; i <= exponent; i++) {
  //   console.log(base ** i)
  // }  
  let i = 1
  if (i === exponent) {
    return
  }
  base ** i
  console.log(powerCalculator(base, i))
  // console.log(base ** exponent)
  // console.log(base * powerCalculator(base, exponent - 1))
}
powerCalculator(10, 3)
  // 10
  // 10 * 10
  // 10 * 10 * 10
  // = 1000
// powerCalculator(10, -2)


// 3. Reverse String



// 4. nth Triangular Number



// 5. String Splitter



// 6. Fibonacci



// 7. Factorial



// 8. Maze - one way out



// 9 Maze - all ways out



// 10. Anagrams



// 11. Org Chart



// 12. Binary Rep



// const arrayDoubler = function(arr) {
//   if (arr.length === 0) {
//     return
//   }
//   let newArr = []
//   newArr.push(arr[0] * 2)
//   arrayDoubler(arr.splice(1))
//   console.log('arr', arr)
//   arr.push(newArr)
//   return arr
// }
// console.log(arrayDoubler([1, 2, 3]))

// let arr = [1, 2, 3]
// console.log(arr.splice(1))