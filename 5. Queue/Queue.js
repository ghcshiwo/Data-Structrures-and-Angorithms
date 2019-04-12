class Queue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  isEmpty() {
    if (this.dataStore.length == 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.dataStore.length
  }

  clear() {
    this.dataStore = []
  }

  toString() {
    var retStr = ''
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + '\n'
    }
    return retStr
  }
}

module.exports = Queue
