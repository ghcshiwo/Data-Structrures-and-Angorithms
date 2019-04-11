// 一个算术表达式的后缀表达式形式如下：
//    op1 op2 operator
// 使用两个栈，一个用来存储操作数，另外一个用来存储操作符
// 设计并实现一个JavaScript 函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值

// 个人认为操作数不需要用栈存储，所以解题只用一个栈（不懂两个栈怎么实现）

let Stack = require('../Stack')

// 该测试代码中操作数、操作符互相之间必须有空格

function infixToSuffix(str) {
  str = str.split(' ')
  let s = new Stack()
  let map = {
    ')': 0,
    '(': 3,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  }
  let output = []
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === undefined) {
      // 是操作数，直接输出
      output.push(str[i])
    } else if (map[str[i]] === 0) {
      // 是')'，一直输出操作符，直到遇到'('
      while (map[s.peek()] !== 3) {
        output.push(s.pop())
      }
      s.pop()
    } else if (s.isEmpty()) {
      // 操作符栈为空，操作符直接入栈
      s.push(str[i])
    } else if (map[str[i]] > map[s.peek()]) {
      // 当前操作符优先级比栈顶操作符高， 入栈
      s.push(str[i])
    } else {
      while (map[str[i]] <= map[s.peek()] && map[s.peek()] < 3) {
        // 当前操作符优先级比栈顶操作符低 并且 栈顶不是'('， 输出操作符，当前操作符入栈
        output.push(s.pop())
      }
      s.push(str[i])
    }
  }

  // 输出剩余操作符
  while (!s.isEmpty()) {
    output.push(s.pop())
  }

  return output.join(' ')
}

let test1 = infixToSuffix('a + b * c + ( d * e + f ) * g')
let test2 = infixToSuffix('1 + 2 * ( 3 - 4 )')
let test3 = infixToSuffix('21 * ( 19 + 93 / 31 - 15 ) + 24')


console.log(test1) // a b c * + d e * f + g * +
console.log(test2) // 1 2 3 4 - * +
console.log(test3) // 21 19 93 31 / + 15 - * 24 +

function countSuffixExpression(str) {
  str = str.split(' ')
  let s = new Stack()
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      let x = s.pop()
      let y = s.pop()
      s.push(eval( y + str[i] + x))
    } else {
      s.push(str[i])
    }
  }

  return s.pop()
}

console.log(countSuffixExpression(test2)) // -1
console.log(countSuffixExpression(test3)) // 171