// 增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作

// List.js文件 91-99
const List = require('../List') 
let names = new List()
names.append("Clayton")
names.append("Raymond")
names.append("Cynthia")
names.append("Jennifer")
names.append("Bryan")
names.append("Danny")

console.log(names.insertByMIN('Amy', 'Clayton'))
console.log(names.insertByMIN('Jay', 'Clayton'))

names.showList()