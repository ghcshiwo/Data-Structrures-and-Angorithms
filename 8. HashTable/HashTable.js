class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  simpleHash(data) {
    var total = 0
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i)
    }
    return total % this.table.length
  }

  betterHash(string) {
    const H = 37
    let total = 0
    for (let i = 0; i < string.length; ++i) {
      total = H * total + string.charCodeAt(i)
    }
    total = total % this.table.length
    // console.log(total)
    if (total < 0) {
      total += this.table.length - 1
    }
    return parseInt(total)
  }

  get(key) {
    return this.table[this.betterHash(key)]
  }

  put(data) {
    let pos = this.betterHash(data)
    this.table[pos] = data
  }

  show() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(i + ': ' + this.table[i])
      }
    }
  }
}

module.exports = HashTable
