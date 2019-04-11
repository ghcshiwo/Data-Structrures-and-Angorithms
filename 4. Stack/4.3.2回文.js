let Stack = require('./Stack')

// 回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的

function isPalindrome(word) {
  let s = new Stack()
  for (let i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  let rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word == rword) {
    return true
  } else {
    return false
  }
}

/* ============= 测试 ============= */

let word = 'hello'
if (isPalindrome(word)) {
  console.log(word + ' is a palindrome.')
} else {
  console.log(word + ' is not a palindrome.')
}
word = 'racecar'
if (isPalindrome(word)) {
  console.log(word + ' is a palindrome.')
} else {
  console.log(word + ' is not a palindrome.')
}
