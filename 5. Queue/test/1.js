// 修改Queue 类，形成一个Deque 类
// 这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。写一段测试程序测试该类

let Deque = require('../Deque')

let d = new Deque()
d.backEnqueue(1)
d.backEnqueue(2)
d.backEnqueue(3)
console.log(d) // [1,2,3]
d.frontEnqueue(4)
console.log(d) // [4,1,2,3]
d.frontDequeue()
console.log(d) // [1,2,3]
d.backDequeue()
console.log(d) // [1,2]
