class List {
  constructor () {
    this.listSize = 0 // 列表元素个数
    this.pos = 0      // 列表的当前位置
    this.dataStore = [] // 初始化一个空数组来保存列表元素
  }

  /**
   * find：在列表中查找某一元素
   * @param {*} element 查找的元素
   */
  find (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return i
    }
    return -1
  }

  /**
   * contains：判断给定值是否在列表中
   * @param {*} element 查找的元素
   */
  contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) return true
    }
    return false
  }

  /**
   * append：给列表添加元素
   * @param {*} element 添加的元素
   */
  append (element) {
    this.dataStore[this.listSize++] = element
  }

  /**
   * remove：从列表中删除元素
   * @param {*} element 删除的元素
   */
  remove (element) {
    let foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt,1)
      this.listSize--
      return true
    }
    return false
  }

  /**
   * length：列表中有多少个元素
   */
  length() {
    return this.listSize
  }

  /**
   * toString：显示列表中的元素
   */
  toString() {
    return this.dataStore
  }

  /**
   * insert：向列表中插入一个元素
   * @param {*} element 
   * @param {*} after 
   */
  insert(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }

  insertByMAX(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1 && this.dataStore.every(a=>a<element)) {
      this.dataStore.splice(insertPos + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }

  insertByMIN(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1 && this.dataStore.every(a=>a>element)) {
      this.dataStore.splice(insertPos + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }

  /**
   * clear：清空列表中所有的元素
   */
  clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }

  front() {
    this.pos = 0
  }

  end() {
    this.pos = this.listSize - 1
  }

  prev() {
    if (this.pos >= 0) {
      this.pos--
    }
  }

  next() {
    if (this.pos < this.listSize) {
      this.pos++
    }
  }

  currPos() {
    return this.pos
  }

  moveTo(position) {
    this.pos = position
  }

  getElement() {
    return this.dataStore[this.pos]
  }

  getList() {
    return this.dataStore
  }

  showList() {
    for(this.front(); this.currPos() <= this.length()-1; this.next()) {
      console.log(this.getElement())
    }
  }

}
module.exports = List