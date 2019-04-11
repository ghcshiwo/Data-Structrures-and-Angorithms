let Stack = require('./Stack')

function fact(n) {
  let s = new Stack()
  while (n > 1) {
    s.push(n--)
  }
  let product = 1
  while (s.length() > 0) {
    product *= s.pop()
  }
  return product
}

console.log(fact(5)) // 120