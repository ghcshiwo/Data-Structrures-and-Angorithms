// 通过 [] 操作符声明一个数组变量
var numbers = []
console.log(numbers.length)

// 直接在 [] 操作符内放入一组元素
var numbers = [1,2,3,4,5]
console.log(numbers.length) // 5

// 调用 Array 的构造函数创建数
var numbers = new Array()
console.log(numbers.length) // 0

// 构造函数传入一组元素作为数组的初始值：
var numbers = new Array(1,2,3,4,5)
console.log(numbers.length) // 5

// 调用Array 的构造函数时，可以只传入一个参数，用来指定数组的长度
var numbers = new Array(10)
console.log(numbers.length) // 10

// 数组中的元素不必是同一种数据类型
// 调用Array.isArray() 来判断一个对象是否是数组
var numbers = 3
var arr = [7,4,1776]
console.log(Array.isArray(numbers)) // false
console.log(Array.isArray(arr)) // true