class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}
class DLList {
  constructor() {
    this.head = new Node('head')
    this.currNode = this.head
  }

  find(element) {
    let currNode = this.head
    while (currNode.element != element) {
      currNode = currNode.next
    }
    return currNode
  }

  findLast() {
    var currNode = this.head
    while (!(currNode.next == null)) {
      currNode = currNode.next
    }
    return currNode
  }

  insert(newElement, element) {
    let newNode = new Node(newElement)
    let current = this.find(element)
    newNode.next = current.next
    newNode.prev = current
    if (current.next !== null) {
      current.next.prev = newNode
    }
    current.next = newNode
  }

  remove(element) {
    let current = this.find(element)
    if (!(current.next == null)) {
      current.prev.next = current.next
      current.next.prev = current.prev
      current.next = null
      current.prev = null
    }
     else {
      current.prev.next = current.next
      current.next = null
      current.prev = null
    }
  }

  display() {
    let currNode = this.head
    while (!(currNode.next == null)) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }

  dispReverse() {
    let currNode = this.head
    currNode = this.findLast()
    while (!(currNode.prev == null)) {
      console.log(currNode.element)
      currNode = currNode.prev
    }
  }
  
  setCurrNode (element) {
    let currNode = this.find(element)
    if (currNode) {
      this.currNode = currNode
    }
  }

  back (n) {
    let step = n
    let node = this.currNode
    while (step !== 0 && node.prev !== this.head) {
      node = node.prev
      step--
    }
    if(step){
      console.log('移动步数越界了')
      return
    } else {
      this.currNode = node
      console.log(`移动${n}步, 当前节点为${this.currNode.element}`)
    }
  }

  advance(n) {
    let step = n
    let node = this.currNode
    while (step !== 0 && node.next !== null) {
      node = node.next
      step--
    }
    if(step){
      console.log('移动步数越界了')
      return
    } else {
      this.currNode = node
      // console.log(`移动${n}步, 当前节点为${this.currNode.element}`)
    }
  }

  show () {
    console.log(`当前节点为${this.currNode.element}`)
    return this.currNode.element
  }
}

module.exports = DLList
