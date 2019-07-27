class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }

    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peep(stack) {
  return stack.top.data
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true
  } else {
    return false
  }
}

function display(stack) {
  if (stack.top === null) {
    return `Stack is empty!`
  }

  let current = stack.top
  let count = 0

  while (current !== null) {
    console.log(count + ' ' + current.data)
    count++
    current = current.next
  }

  while (current === null) {
    return
  }

  return `First item is ${peep(stack)}`
}

function main() {
  let starTrek = new Stack()

  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')

  return display(starTrek)
}

// console.log(main())

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  // Without using stacks:
  // for (let i = 0; i < str.length / 2; i++) {
  //   if (str[i] !== str[str.length - i - 1]) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // Using stacks:
  let stack1 = new Stack()
  let stack2 = new Stack()

  for (let i = 0; i < str.length; i++) {
    stack1.push(str[i])
  }
  
  let current = stack1.top

  while (current !== null) {
    stack2.push(current.data)
    current = current.next
  }

  let a = stack1.top
  let b = stack2.top

  while (a !== null && b !== null) {
    if (a.data !== b.data) {
      return false
    } else {
      a = a.next
      b = b.next
    }
  }
  return (a === null && b === null)
}

console.log(isPalindrome('dad'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('1001'))
console.log(isPalindrome('Tauhida'))