// 增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执行插入操作
// 这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它是指在字母表中出现的先后顺序

// List.js文件 81-89
const List = require('../List') 
let names = new List()
names.append("Clayton")
names.append("Raymond")
names.append("Cynthia")
names.append("Jennifer")
names.append("Bryan")
names.append("Danny")

console.log(names.insertByMAX('Zero', 'Clayton'))
console.log(names.insertByMAX('Jay', 'Clayton'))

names.showList()