let PriorityQueue = require('./PriorityQueue')

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
