class Deque {
  constructor() {
    this.dataStore = []
  }

  backEnqueue(element) {
    this.dataStore.push(element)
  }

  frontDequeue() {
    return this.dataStore.shift()
  }

  frontEnqueue(element) {
    this.dataStore.splice(0, 0, element)
  }

  backDequeue() {
    return this.dataStore.pop()
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

module.exports = Deque
