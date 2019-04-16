let fs = require('fs')
let path = require('path')
const BST = require('./Tree')

const words = fs
  .readFileSync(path.join(__dirname, './file.txt'), 'utf8')
  .split(' ')

let wordBTS = new BST()
words.forEach(word => {
  let item = wordBTS.find(word)
  if (item) {
    wordBTS.update(word)
  } else {
    wordBTS.insert(word)
  }
})

wordBTS.inOrder(wordBTS.root)
