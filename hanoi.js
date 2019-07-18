const hanoiSteps = function(num) {
  if (num <= 0) {
    return 0
  }
  // iterative
  // return (2 ** num) - 1
  console.log ('step')
  // recursive
  return (2 * hanoiSteps(num - 1)) + 1
}

// console.log(hanoiSteps(5))

// 3 ==> 7
// 4 ==> 15
// 5 ==> 31
// 6 ==> 63
// 7 ==> 127

// each result is 2 * prevResult + 1


const hanoiGame = function(disks, arr1, arr2, arr3) {
  if (disks === 0) {
    return 0
  } else if (disks === 1) {
    return 1
  } else {
    for (let i = disks; i > 0; i--) {
      arr1.push(i)
    }

    let movNum = arr1.pop()
    console.log('!')
    
    if (arr2.length === 0 || movNum < arr2[targetArr.length - 1]) {
      let moved = arr1.pop()
      arr2.push(moved)
    } else if (arr2.length > 0 && movNum > arr2[targetArr1.length - 1]) {
      arr3.push(movNum)
    } else {
      hanoiGame(disks - 1, arr1, arr2, arr3)
    }
  }
}

console.log(hanoiGame(5, [5, 4, 3], [], [2, 1]))
// [ [5, 4], [3, 2, 1], [] ]