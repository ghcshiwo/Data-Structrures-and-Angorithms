// 4. 创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
function Word () {
  this.wordArr = []
  this.add = add
  this.showWord = showWord
}

function add(word) {
  this.wordArr.push(word)
}

function showWord() {
  return this.wordArr.join('')
}

function main () {
  let word = new Word()
  word.add('j')
  word.add('a')
  word.add('v')
  word.add('a')
  word.add('s')
  word.add('c')
  word.add('r')
  word.add('i')
  word.add('p')
  word.add('t')
  console.log(word.showWord())
}

main()