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
    this.values = [] //values
  }

  put(key, data) {
    let pos = this.betterHash(key)
    if (this.table[pos] == undefined) {
      this.table[pos] = key
      this.values[pos] = data
    } else {
      while (this.table[pos] !== undefined) {
        pos++
      }
      this.table[pos] = key
      this.values[pos] = data
    }
  }

  get(key) {
    let pos = this.betterHash(key)
    if (pos) {
      for (let i = pos; this.table[pos] != undefined; i++) {
        if (this.table[pos] === key) {
          return this.values[pos]
        }
      }
    }
    return undefined
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