class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next != null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, nextVal) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let nextItem = this.find(nextVal)
      let tempNode = this.head

      while (tempNode.next !== null) {
        if (tempNode.next.value === nextVal) {
          let newNode = new _Node(item, nextItem)

          newNode.next = tempNode.next
          tempNode.next = newNode

          return newNode
        }
        tempNode = tempNode.next
      }
    }
  }

  insertAfter(prevVal, item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let newNode = new _Node(item, null)
      let previous = this.find(prevVal)

      newNode.next = previous.next
      previous.next = newNode

      return newNode
    }
  }

  insertAt(item, position) {
    if (!this.head) {
      this.insertFirst(item)
    }
    else {
      let count = 0
      let tempNode = this.head
      let prev = null

      while (count !== position) {
        count++
        prev = tempNode
        tempNode = tempNode.next
      }

      let newNode = new _Node(item, null)
      newNode.next = tempNode

      if (count === 0) {
        tempNode = newNode
      }
      else {
        prev.next = newNode
        return newNode
      }
    }
  }

  find(item) {
    let currNode = this.head

    if (!this.head) {
      return null
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }

    return currNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }

    if (this.head.value === item) {
      this.head = this.head.next
      return
    }

    let currNode = this.head
    let previousNode = this.head

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode
      currNode = currNode.next
    }

    if (currNode === null) {
      console.log('Item not found.')
      return
    }

    previousNode.next = currNode.next
  }

  size() {
    if (this.head === null) {
      return 0
    }

    let count = 0
    let tempNode = this.head
    while (tempNode.next !== null) {
      count++
    }
    return count
  }

  findPrevious(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
  }

  findLast() {
    if (this.head === null) {
      this.insertFirst('First')
    }

    let tempNode = this.head
    while (tempNode.next !== null) {
      tempNode = tempNode.next
    }
    return tempNode
  }
}

// function main() {
//   let SLL = new LinkedList()

//   SLL.insertFirst('Apollo')
//   SLL.insertLast('Boomer')
//   SLL.insertLast('Helo')
//   SLL.insertLast('Husker')
//   SLL.insertLast('Starbuck')
//   SLL.insertLast('Tauhida')

//   SLL.insertBefore('Athena', 'Boomer')
//   SLL.insertAfter('Helo', 'Hotdog')
//   SLL.insertAt('Kat', 3)
  
//   return SLL.size()
// }

// console.log(main())

module.exports = LinkedList