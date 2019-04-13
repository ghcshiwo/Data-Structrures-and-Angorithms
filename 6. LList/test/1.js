// 实现advance(n) 方法，使当前节点向前移动n 个节点
// 我理解的当前节点向前移动只是移动指针指向(index)，而不是当前节点所在位置的移动
// 位置移动的代码也有，在注释中

const LList = require('../LList')
let link = new LList()
link.insert(1, 'head')
link.insert(2, 'head')
link.insert(3, 'head')
link.insert(4, 'head')
link.insert(5, 'head')
link.insert(6, 'head')
link.insert(7, 'head')
link.insert(8, 'head')
link.display()
link.setCurrNode(8)
link.advance(6)
link.display()