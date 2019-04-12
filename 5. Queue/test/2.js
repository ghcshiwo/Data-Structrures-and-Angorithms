// 使用前面完成的Deque 类来判断一个给定单词是否为回文

let Deque = require('../Deque')

function isPalindrome(str) {
  if (!str) {
    return false
  }
  let d = new Deque()
  str.split('').forEach(item => d.backEnqueue(item))
  let step = Math.floor(str.length / 2)
  for (let i = 0; i < step; i++) {
    if (d.frontDequeue() !== d.backDequeue()) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('asss'))
console.log(isPalindrome('asdfghgfdsa'))
console.log(isPalindrome('aqwsderefdsw'))
