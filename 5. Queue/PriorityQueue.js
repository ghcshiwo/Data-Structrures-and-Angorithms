class PriorityQueue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    let priority = this.dataStore[0].code
    let index = 0
    for (let i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code < priority) {
        priority = this.dataStore[i].code
        index = i
      }
    }
    return this.dataStore.splice(index, 1)
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
    let retStr = ''
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr +=
        this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n'
    }
    return retStr
  }
}

module.exports = PriorityQueue
