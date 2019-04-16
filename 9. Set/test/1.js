const Set = require('../Set.js')

class newSet extends Set {
  
  add(value) {
    let flag = false
    for (let item of this.dataStore) {
      if (item === value) {
        flag = true
        break
      }
    }
    !flag && this._add(value)
  }

  _add(value) {
    let i = 0
    while (value > this.dataStore[i]) {
      i++
    }
    this.dataStore.splice(i, 0, value)
  }
}

let myset = new newSet()

myset.add(6)
myset.add(18)
myset.add(5)
myset.add(1)

console.log(myset.show())
