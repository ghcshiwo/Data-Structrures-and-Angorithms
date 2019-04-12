// 修改例5-5 中的优先队列，使得优先级高的元素优先码也大。写一段程序测试你的改动。

const Queue = require('../Queue.js')
class PriorityQueue extends Queue {

  dequeue() {
    let priority = this.dataStore[0].code
    let index = 0
    for (let i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code > priority) {
        priority = this.dataStore[i].code
        index = i
      }
    }
    return this.dataStore.splice(index, 1)
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

function Patient(name, code) {
  this.name = name
  this.code = code
}
/* ============= 测试 ============= */
let p = new Patient('Smith', 5)
let ed = new PriorityQueue()
ed.enqueue(p)
p = new Patient('Jones', 4)
ed.enqueue(p)
p = new Patient('Fehrenbach', 6)
ed.enqueue(p)
p = new Patient('Brown', 1)
ed.enqueue(p)
p = new Patient('Ingram', 1)
ed.enqueue(p)
console.log(ed.toString())
var seen = ed.dequeue()
console.log('Patient being treated: ' + seen[0].name)
console.log('Patients waiting to be seen: ')
console.log(ed.toString())
// 下一轮
var seen = ed.dequeue()
console.log('Patient being treated: ' + seen[0].name)
console.log('Patients waiting to be seen: ')
console.log(ed.toString())
// 下一轮
var seen = ed.dequeue()
console.log('Patient being treated: ' + seen[0].name)
console.log('Patients waiting to be seen: ')
console.log(ed.toString())
