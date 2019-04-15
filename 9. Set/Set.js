class Set {
  constructor() {
    this.dataStore = []
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data)
      return true
    } else {
      return false
    }
  }

  remove(data) {
    let pos = this.dataStore.indexOf(data)
    if (pos > -1) {
      this.dataStore.splice(pos, 1)
      return true
    } else {
      return false
    }
  }

  contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true
    } else {
      return false
    }
  }

  union(set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      tempSet.add(this.dataStore[i])
    }
    for (let i = 0; i < set.dataStore.length; ++i) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i])
      }
    }
    return tempSet
  }

  intersect(set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }
    return tempSet
  }

  subset(set) {
    if (this.size() > set.size()) {
      return false
    } else {
      for (let member in this.dataStore) {
        if (!set.contains(member)) {
          return false
        }
      }
    }
    return true
  }
  // 补集
  difference(set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }
    return tempSet
  }

  size() {
    return this.dataStore.length
  }

  show() {
    return this.dataStore
  }
}

module.exports = Set
