// TODO: write function to check if idx is valid
// TODO: write function to find val at idx

/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null
    this.tail = null
    this.prev = null
    this.length = 0

    for (let val of vals) this.push(val)
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length) {
      throw new Error('list is empty')
    }

    let current = this.head
    while (current !== null && count != (this.length - 1)) {
      count += 1
      current = current.next
    }
    let prev = current

    const poppedVal = this.tail.val
    this.prev.next = null
    this.tail = prev
    this.length -= 1

    return poppedVal
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length) {
      throw new Error('list is empty')
    }

    const shiftedVal = this.head.val
    this.head = this.head.next
    this.length -= 1

    return shiftedVal
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid Index')
    }

    let current = this.head
    while (current !== null && count != idx) {
      count += 1
      current = current.next
    }
    
    return current.val
  }
  
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid Index')
    }

    let current = this.head
    while (current !== null && count != idx) {
      count += 1
      current = current.next
    }

    current.val = val
  }
  
  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid Index')
    }

    let newNode = new Node(val)

    let current = this.head
    while (current !== null && count != (idx - 1)) {
      count += 1
      current = current.next
    }
    let prev = current
    
    newNode.next = prev.next
    prev.next = newNode
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid Index')
    }

    let current = this.head
    let count = 0
    while (current !== null && count != (idx - 1)) {
      count += 1
      current = current.next
    }
    let prev = current

    let val = prev.next.val
    prev.next = prev.next.next
    this.length -=1

    return val

  }

  /** average(): return an average of all values in the list */

  average() {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid Index')
    }

    let current = this.head
    let average = 0
    while (current) {
      average += current.val 
      current = current.next
    }

    return average / this.length
  }
}

module.exports = LinkedList
