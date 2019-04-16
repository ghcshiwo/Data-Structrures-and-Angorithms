class Node {
  constructor(data, left, right) {
    this.data = data
    this.count = 1
    this.left = left
    this.right = right
  }
  show() {
    return this.data + ' 出现次数为： ' + this.count
  }
}

class Tree {
  constructor() {
    this.root = null
    this.NodeCount = 0
  }

  insert(data) {
    let n = new Node(data, null, null)
    this.NodeCount ++
    if (this.root == null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current == null) {
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current == null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  update(data) {
    let grade = this.find(data)
    grade.count++
    return grade
  }

  inOrder(node) {
    if (!(node == null)) {
      this.inOrder(node.left)
      console.log(node.show())
      this.inOrder(node.right)
    }
  }

  preOrder(node) {
    if (!(node == null)) {
      console.log(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder(node) {
    if (!(node == null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show())
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, data) {
    if (node == null) {
      return null
    }
    if (data == node.data) {
      // 没有子节点的节点
      if (node.left == null && node.right == null) {
        return null
      }
      // 没有左子节点的节点
      if (node.left == null) {
        return node.right
      }
      // 没有右子节点的节点
      if (node.right == null) {
        return node.left
      }
      // 有两个子节点的节点
      var tempNode = this.getMinNode(node.right)
      node.data = tempNode.data
      node.right = this.removeNode(node.right, tempNode.data)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }

  getMin() {
    let current = this.root
    while (!(current.left == null)) {
      current = current.left
    }
    return current.data
  }

  getMinNode(node) {
    let current = node || this.root
    while (!(current.left == null)) {
      current = current.left
    }
    return current
  }

  getMax() {
    let current = this.root
    while (!(current.right == null)) {
      current = current.right
    }
    return current.data
  }

  getMaxNode(node) {
    let current = node || this.root
    while (!(current.right == null)) {
      current = current.right
    }
    return current
  }

  find(data) {
    let current = this.root
    while (current != null) {
      if (current.data == data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  findNodeCount() {
    return this.NodeCount
  }
}

module.exports = Tree
