// 写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典
// 该程序需包含如下功能：
//     显示单个电话号码
//     显示所有电话号码
//     增加新电话号码
//     删除电话号码
//     清空所有电话号码。

let Dictionary = require('../Dictionary')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let fs = require('fs')
let path = require('path')

let telDictionary = new Dictionary()
const tels = fs
  .readFileSync(path.join(__dirname, '../tel.txt'), 'utf8')
  .split('\r\n')

tels.forEach(tel => {
  telDictionary.add(tel.split(' ')[0], tel.split(' ')[1])
})

function showMenu() {
  console.log('请输入功能编号：')
  console.log('1. 查找电话')
  console.log('2. 显示所有号码')
  console.log('3. 新增号码')
  console.log('4. 删除号码')
  console.log('5. 清空所有号码')
}

showMenu()
let fun = ''
rl.on('line', line => {
  switch (line) {
    case '1':
      console.log('请输入要查找的人：')
      fun = 'select'
      break
    case '2':
      telDictionary.show()
      showMenu()
      break
    case '3':
      console.log('请输入要新增的姓名和号码（用空格分割）：')
      fun = 'add'
      break
    case '4':
      console.log('请输入要删除的人：')
      fun = 'del'
      break
    case '5':
      telDictionary.clear()
      console.log('全部删除成功！')
      showMenu()
      break
    default:
      let data = line.split(' ')
      if (fun === 'add') {
        telDictionary.add(data[0], data[1])
        console.log('添加成功！')
      } else if (fun === 'select') {
        console.log(data[0] + '的电话为' +telDictionary.find(data[0]))
      } else if (fun === 'del') {
        telDictionary.remove(data[0])
        console.log('删除成功！')
      }
      showMenu()
      fun = ''
      break
  }
  rl.prompt()
}).on('close', () => {
  console.log('再见!')
  process.exit(0)
})
