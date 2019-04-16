const Set = require('../Set.js')
const LList = require('../../6. LList/LList')
class newSet extends Set {
  constructor(props) {
    super(props)
    this.dataStore = new LList()
  }
  add(value) {
    this.dataStore.insert(value)
  }

  show() {
    this.dataStore.display()
  }
}

let myset = new newSet()

myset.add(6)
myset.add(18)
myset.add(5)
myset.add(1)

myset.show()
