let fs = require('fs')
let path = require('path')
let readline = require('readline')
let HashTable = require('../HashTable')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const words = fs
  .readFileSync(path.join(__dirname, '../words.txt'), 'utf8')
  .split('\r\n')

class NewHash extends HashTable {
  constructor(props) {
    super(props)
  }

  put(key, data) {
    let pos = this.betterHash(key)
    let index = 0
    if (this.table[pos]) {
      while (this.table[pos][index] !== undefined) {
        index++
      }
    } else {
      this.table[pos] = []
    }
    this.table[pos][index] = key
    this.table[pos][index + 1] = data
  }

  get(key) {
    let pos = this.betterHash(key)
    let index = 0
    if (this.table[pos]) {
      while (this.table[pos][index] !== key) {
        index += 2
      }
      return this.table[pos][index + 1]
    } else {
      return undefined
    }
  }
}

let wordTable = new NewHash()
words.forEach(word => {
  wordTable.put(word.split(':')[0], word.split(':')[1])
})
console.log(wordTable.table)
console.log('请输入你要查找的单词:')
rl.on('line', line => {
  console.log(line + ': ' + wordTable.get(line))
  console.log('请输入你要查找的单词:')
  rl.prompt()
}).on('close', () => {
  console.log('再见!')
  process.exit(0)
})
