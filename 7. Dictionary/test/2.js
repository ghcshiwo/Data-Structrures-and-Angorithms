// 使用Dictionary 类写一个程序
// 该程序用来存储一段文本中各个单词出现的次数
// 该程序显示每个单词出现的次数，但每个单词只显示一次
// 比如下面一段话“the brown foxjumped over the blue fox”，程序的输出应为：
//     the: 2
//     brown: 1
//     fox: 2
//     jumped: 1
//     over: 1
//     blue: 1

let Dictionary = require('../Dictionary')
let word = new Dictionary()
function checkString (str) {
  let data = str.split(' ')
  data.forEach(item => {
    let num = word.find(item) === undefined ? 0 : word.find(item)
    word.add(item, ++num)
  })
  word.show()
}

checkString('the brown fox jumped over the blue fox')