let Stack = require('./Stack')


// 数字 n 转换为以 b 为基数的数字
function mulBase(num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num /= base)
  } while (num > 0)
  let converted = ""
  while (s.length() > 0) {
    converted += s.pop()
  }
  return converted
}

/* ============= 测试 ============= */
let num = 32
let base = 2
let newNum = mulBase(num, base)
console.log(num + " converted to base " + base + " is " + newNum) // 32 converted to base 2 is 100000
num = 125 
base = 8
newNum = mulBase(num, base)
console.log(num + " converted to base " + base + " is " + newNum) // 125 converted to base 8 is 175