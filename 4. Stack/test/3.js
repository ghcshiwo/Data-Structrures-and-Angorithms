// 现实生活中栈的一个例子是佩兹糖果盒
// 想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果
// 使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出

let Stack = require('../Stack')
let sweet = new Stack()
sweet.push('红')
sweet.push('白')
sweet.push('黄')
sweet.push('黄')
sweet.push('白')
sweet.push('白')
sweet.push('红')
sweet.push('黄')
sweet.push('红')

function excludeSweet (color) {
  let tempBox = new Stack()
  while (!sweet.isEmpty()) {
    if (sweet.peek() === color) sweet.pop()
    else tempBox.push(sweet.pop())
  }
  console.log(sweet)
  console.log(tempBox)
  while (!tempBox.isEmpty()) {
    sweet.push(tempBox.pop())
  }
  return sweet
}
console.log(excludeSweet('黄'))
