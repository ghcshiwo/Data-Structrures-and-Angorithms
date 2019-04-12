// 修改例5-5 中的候诊室程序，使得候诊室内的活动可以被控制。写一个类似菜单系统，
// 让用户可以进行如下选择：
// a. 患者进入候诊室；
// b. 患者就诊；
// c. 显示等待就诊患者名单。

const readline = require('readline')
const Queue = require('../Queue')
let q = new Queue()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log('a. 患者进入候诊室；')
console.log('b. 患者就诊；')
console.log('c. 显示等待就诊患者名单。')
rl.on('line', line => {
  switch (line.trim()) {
    case 'a':
      console.log(`请输入你的姓名`)
      break
    case 'b':
      console.log('请' + q.dequeue() + '就诊')
      break
    case 'c':
      console.log('正在等待的患者有: ')
      console.log(q.toString())
      break
    default:
      q.enqueue(line)
      console.log('已为你排号 ')
      break
  }
  rl.prompt()
}).on('close', () => {
  console.log('再见!')
  process.exit(0)
})
