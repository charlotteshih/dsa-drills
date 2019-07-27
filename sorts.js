const LinkedList = require('./linkedList')

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  left = mergeSort(left)
  right = mergeSort(right)
  // console.log('left', left)
  // console.log('right', right)

  return merge(left, right, array)
}

function merge(left, right, array) {
  let leftIndex = 0
  let rightIndex = 0
  let outputIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++]
      // console.log("array after adding left[leftIndex++]", array)
    } else {
      array[outputIndex++] = right[rightIndex++]
      // console.log("array after adding right[rightIndex++]", array)
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i]
    // console.log("array after adding left[i]", array)
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i]
    // console.log("array after adding right[i]", array)
  }

  return array
}

// console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array
  }
  const middle = partition(array, start, end)
  //  console.log("middle", array[middle])
  array = quickSort(array, start, middle)
  // console.log('quickSort start-middle', array)
  array = quickSort(array, middle + 1, end)
  // console.log('quickSort', array)
  return array
}

function partition(array, start, end) {
  const pivot = array[start]
  let j = start
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j)
      j++
    }
  }
  swap(array, end - 1, j)
  return j
}

// console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))

function createList(data) {
  let list = new LinkedList()
  data.map(item => list.insertFirst(item))
  return list
}

function linkedListSort() {
  let list = createList([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
  let listData = []
  let tempNode = list.head
  // console.log('tempNode', tempNode.next)

  while (tempNode.next != null) {
    // console.log('tempNode', tempNode)
    let tempNode2 = tempNode
    listData.push(tempNode.value)
    tempNode = tempNode.next
    list.remove(tempNode2.value)
  }

  mergeSort(listData)
  // console.log(listData)

  // let list2 = new LinkedList()
  // list2.insertFirst(listData[0])
  // listData.slice(0).map(item => list2.insertLast(item))

  list.insertFirst(listData[0])

  let listData2 = listData.slice(1, listData.length)

  listData2.map(item => list.insertLast(item))

  return list
}

// console.log(linkedListSort())

// bucketSort
function bucketSort(list, bucketCount) {
  // only for numbers
  let min = Math.min.apply(Math, list),  // get the min
      buckets = [],
      bucket_count = bucketCount || 200

  // build the bucket and distribute the elements in the list
  for (let i = 0; i < list.length; i++) {
    // this is a simple hash function that will make sure the basic rule of bucket sort
    let newIndex = Math.floor( (list[i] - min) / bucket_count );
    console.log('newIndex', newIndex)

    buckets[newIndex] = buckets[newIndex] || []
    console.log('buckets[newIndex]', buckets[newIndex])

    buckets[newIndex].push(list[i])
    console.log('pushed buckets[newIndex]', buckets[newIndex])
  }

  console.log("buckets", buckets)
  // refill the elements into the list
  let idx = 0
  for (let i = 0; i < buckets.length; i++) {
    if (typeof buckets[i] !== "undefined") {
      // select those non-empty buckets
      quickSort(buckets[i]);  // use any sorting algorithm would be fine
      // sort the elements in the bucket
      for (let j = 0; j < buckets[i].length; j++){
        list[idx++] = buckets[i][j]
      }
    }
  }
  return list
}

// console.log(bucketSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12], 3))

function sortInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newIndex = Math.floor(Math.random() * (arr.length - 1))
    swap(arr, i, newIndex)
  }
  
  return arr
}

// console.log(sortInPlace([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))

// function alphabetizeStrings(arr) {
  
// }

// console.log(alphabetizeStrings(['one', 'two', 'three', 'four', 'five']))