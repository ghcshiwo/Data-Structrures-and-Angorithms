let fs = require('fs')
let path = require('path')
let HashTable = require('../HashTable')

const words = fs
  .readFileSync(path.join(__dirname, '../words.txt'), 'utf8')
  .split('\r\n').join(' ').split(':').join(' ').split(' ')

class NewHash extends HashTable {
  constructor(props) {
    super(props)
    this.value = []
  }

  put(key) {
    let pos = this.betterHash(key)
    if (this.table[pos] == undefined) {
      this.table[pos] = key
      this.value[pos] = 1
    } else {
      this.value[pos] ++
    }
  }

  get(key) {
    let pos = this.betterHash(key)
    if (pos) {
      return this.table[pos]
    }
    return undefined
  }

  show() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(this.table[i] + '出现次数: ' + this.value[i])
      }
    }
  }
}

let wordTable = new NewHash()
words.forEach(word => {
  wordTable.put(word.split(':')[0], word.split(':')[1])
})
wordTable.show()
