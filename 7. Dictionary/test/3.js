// 修改练习2，使单词按字母顺序显示
let Dictionary = require('../Dictionary')
let word = new Dictionary()
function checkString (str) {
  let data = str.split(' ')
  data.forEach(item => {
    let num = word.find(item) === undefined ? 0 : word.find(item)
    word.add(item, ++num)
  })
  word.showSort()
}

checkString('the brown fox jumped over the blue fox')