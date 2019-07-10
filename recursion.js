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

// const powerCalculator = function (base, exponent) {
//     if (exponent < 0) {
//         console.log(`Exponent should be >= 0`)
//         return
//     }
//     if (exponent === 1) {
//         return base
//     }
//     console.log('exp', exponent)

//     return base * powerCalculator(base, exponent - 1)


// }
// console.log(powerCalculator(10, 3))
// // powerCalculator(10, -3)

// 3. Reverse String

const reverse = function (str) {
  if (str.length === 0) {
    return ''
  }
  const newChar = str[str.length - 1]
  console.log('char', newChar)
  console.log('str', str)
  return newChar + reverse(str.substring(0, str.length - 1))
}
console.log(reverse('cat'))

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