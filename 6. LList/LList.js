class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}
class LList {
  constructor() {
    this.head = new Node('head')
    this.currNode = this.head
  }

  find(element) {
    let currNode = this.head

    while (currNode.next !== null && currNode.element != element) {
      currNode = currNode.next
    }
    if (element !== 'head' && currNode === this.head) {
      console.log('未找到节点' + element)
      return null
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
  }

  remove(element) {
    let prevNode = this.findPrevious(element)
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next
    }
  }

  display() {
    let currNode = this.head
    while (!(currNode.next == null)) {
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
      step--
    }
    if(step){
      console.log('移动步数越界了')
      return
    } else {
      this.currNode = node
      // console.log(`移动${n}步, 当前节点为${this.currNode.element}`)
      // if (this.currNode !== this.head) {
      //   this.insert(this.currNode.element, node.element)
      //   this.remove(this.currNode.element)
      //   console.log('移动${n}步')
      // } else {
      //   console.log(`头部节点不能移动`)
      // }
    }
  }

  show () {
    console.log(`当前节点为${this.currNode.element}`)
    return this.currNode.element
  }
}

module.exports = LList
