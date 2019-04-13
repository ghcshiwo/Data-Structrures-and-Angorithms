// 传说在公元1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40 个同胞被罗马士兵包围
// 犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案
// 他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死
// 然后再数，直到杀光所有人
// 约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存
// 写一段程序将n 个人围成一圈，并且第m 个人会被杀掉，计算一圈人中哪两个人最后会存活
// 使用循环链表解决该问题
const CLList = require('../CLList')
let link = new CLList()

function init(n) {
  for (let i = n; i>0; i--) {
    link.insert(i)
  }
}

function start(m) {
  while (link.length > 2) {
    link.advance(m)
    console.log('自杀士兵编号：', link.currNode.element)
    link.remove(link.currNode.element) 
  }
  console.log('活着士兵编号：')
  link.display()
}

init(10)
start(3)
