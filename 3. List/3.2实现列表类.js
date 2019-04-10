const List = require('./List') 
let names = new List()
names.append("Clayton")
names.append("Raymond")
names.append("Cynthia")
names.append("Jennifer")
names.append("Bryan")
names.append("Danny")

names.front()
console.log(names.getElement()) // Clayton

names.next()
console.log(names.getElement()) // Raymond

names.next()
names.next()
names.prev()
console.log(names.getElement()) // 显示Cynthia