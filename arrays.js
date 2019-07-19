function urlify(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr.push("%20");
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}

// console.log(urlify("foo bar"));

function lessThanFiveBigot(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(lessThanFiveBigot([1, 2, 3, 4, 5, 6, 7]));

function maxSum(arr) {
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(0, i + 1);
    sumArr.push(newArr.reduce((acc, current) => acc + current));
  }
  return sumArr.reduce((acc, current) => Math.max(acc, current));
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

function mergeArr(arr1, arr2) {
  console.log(arr1, arr2);
  let mergedArr = arr1.concat(arr2);
  return mergedArr.sort();
}

// console.log(mergeArr([1, 6, 2, 4, 3], [4, 2, 5, 1, 6]));

function removeCharacters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      continue;
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

// console.log(removeCharacters("i hate vowels"));

function products(arr) {
  let products = [];
  for (i = 0; i < arr.length; i++) {
    let newArr = arr.filter(item => item !== arr[i]);
    products.push(newArr.reduce((a, b) => a * b));
  }
  return products;
}

// console.log(products([1, 3, 9, 4]));

function zeroRemover(arr) {
  let zeroColumns = [];
  for (let i = 0; i < arr.length; i++) {
    // identifies index of columns with 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zeroColumns.push(j);
      }
    }
    // sets rows to 0
    if (arr[i].includes(0)) {
      arr[i] = [0, 0, 0, 0, 0];
    }

    // sets columns to 0
    for (let k = 0; k < zeroColumns.length; k++) {
      let index = zeroColumns[k];
      arr[i][index] = 0;
    }
  }
  return arr;
}

// console.log(
//   zeroRemover([
//     [1, 0, 1, 1, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1]
//   ])
// );

function strRotation(str1, str2) {
  let shifts = [];

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let shiftStr = str1.slice(i, str1.length) + str1.slice(0, i);
    shifts.push(shiftStr);
  }

  if (shifts.includes(str2)) {
    return true;
  } else {
    return false;
  }
}

console.log("strRotation =>", strRotation("amazon", "azonma"));
console.log("strRotation =>", strRotation("amazon", "azonam"));