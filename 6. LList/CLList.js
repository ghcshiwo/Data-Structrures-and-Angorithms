class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}
class CLList {
  constructor() {
    this.head = new Node('head')
    this.head.next = this.head
    this.currNode = this.head 
    this.length = 0
  }

  find(element) {
    let currNode = this.head
    while (currNode.element != element) {
      currNode = currNode.next
    }
    return currNode
  }

  findPrevious(element) {
    let currNode = this.head
    while (!(currNode.next == null) && currNode.next.element != element) {
      currNode = currNode.next
    }
    return currNode
  }

  insert(newElement, element) {
    if (!element) element = 'head'
    let newNode = new Node(newElement)
    let current = this.find(element)
    newNode.next = current.next
    current.next = newNode
    this.length ++
  }

  remove(element) {
    let prevNode = this.findPrevious(element)
    if (!(prevNode.next == null)) {
      if (prevNode.next === this.currNode) {
        this.currNode = prevNode
      }
      prevNode.next = prevNode.next.next
      this.length --
    }
  }

  display() {
    let currNode = this.head
    while (!(currNode.next == null) && !(currNode.next ==  this.head)) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }

  setCurrNode (element) {
    let currNode = this.find(element)
    if (currNode) {
      this.currNode = currNode
    }
  }

  advance(n) {
    let step = n
    let node = this.currNode
    while (step !== 0 && node.next !== null) {
      node = node.next
      if (node !== this.head) step--
    }
    if(step){
      console.log('移动步数越界了')
      return
    } else {
      this.currNode = node
    }
  }

  show () {
    console.log(`当前节点为${this.currNode.element}`)
    return this.currNode.element
  }
}

module.exports = CLList
