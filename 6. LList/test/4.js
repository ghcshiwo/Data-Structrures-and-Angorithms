// 使用单向链表写一段程序，记录用户输入的一组测验成绩

const readline = require('readline')
const LList = require('../LList')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let scoreList = new LList ()
console.log('请输入测验成绩：')
rl.on('line', line => {
  scoreList.insert(line)
  console.log('请输入测验成绩：')
  rl.prompt()
}).on('close', () => {
  console.log('测验成绩：')
  scoreList.display()
  console.log('再见!')
  process.exit(0)
})