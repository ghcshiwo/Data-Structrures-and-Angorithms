class Dictionary {
  constructor() {
    this.datastore = new Array()
  }

  add(key, value) {
    this.datastore[key] = value
  }

  find(key) {
    return this.datastore[key]
  }

  remove(key) {
    delete this.datastore[key]
  }

  clear() {
    Object.keys(this.datastore).forEach(key => {
      delete this.datastore[key]
    })
  }
  length() {
    let n = 0
    Object.keys(this.datastore).forEach(key => n++)
    return n
  }

  show() {
    Object.keys(this.datastore).forEach(key => {
      console.log(key + ' -> ' + this.datastore[key])
    })
  }

  showSort() {
    Object.keys(this.datastore).sort().forEach(key => {
      console.log(key + ' -> ' + this.datastore[key])
    })
  }
}

module.exports = Dictionary
