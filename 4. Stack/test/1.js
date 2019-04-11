// 栈可以用来判断一个算术表达式中的括号是否匹配
// 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置
// 下面是一个括号不匹配的算术表达式的例
// 子：2.3 + 23 / 12 + (3.14159×0.24

let Stack = require('../Stack')

function findParenthesis (str) {
  let map = {
    '(':-1,
    ')':1,
    '[':-2,
    ']':2,
    '{':-3,
    '}':3
  }
  let s = new Stack()
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] < 0) {
      s.push(str[i])
      continue
    }
    if (map[str[i]] > 0 && map[stack.peek()] + symbolMap[str[i]] == 0) {
      s.pop()
      continue
    }
    if (map[str[i]] > 0 && map[stack.peek()] + symbolMap[str[i]] !== 0) {
      result.push(i)
      continue
    }
  }
  if (!s.isEmpty()) {
    result.push(str.length)
  }
  return result.join(',')
}

console.log(findParenthesis('2.3 + 23 / 12 + (3.14159×0.24'))