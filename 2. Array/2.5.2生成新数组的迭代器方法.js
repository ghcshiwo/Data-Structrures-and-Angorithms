// map() 
// 返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果

{
  function curve(grade) {
    return grade += 5
  }
  let grades = [77, 65, 81, 92, 83]
  let newgrades = grades.map(curve)
  console.log(newgrades) // [82, 70, 86, 97, 88]
}

// filter() 
// 传入一个返回值为布尔类型的函数
// 结果均为true 时，返回一个新数组，该数组包含应用该函数后结果为true 的元素

{
  function isEven(num) {
    return num % 2 == 0
  }
  function isOdd(num) {
    return num % 2 != 0
  }
  let nums = []
  for (let i = 0; i < 20; ++i) {
    nums[i] = i+1
  }
  let evens = nums.filter(isEven)
  console.log("Even numbers: ")
  console.log(evens)
  let odds = nums.filter(isOdd)
  console.log("Odd numbers: ")
  console.log(odds)
}