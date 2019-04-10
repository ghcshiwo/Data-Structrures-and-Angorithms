// 使用 [] 操作符将数据赋给数组
var nums = []
for (let i = 0; i < 100; ++i) {
  nums[i] = i+1
}

// 使用 [] 操作符读取数组中的元素
var numbers = [1,2,3,4,5]
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
console.log(sum) // 15

// 读取数组中的所有元素
var array = [1,2,3,5,8,13,21]
var sum = 0
for (let i = 0; i < array.length; ++i) {
  sum += array[i]
}
console.log(sum) // 53