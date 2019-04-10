// forEach()
// 该方法接受一个函数作为参数，对数组中的每个元素使用该函数

{
  function square(num) {
    console.log(num, num * num)
  }
    let nums = [1,2,3,4,5,6,7,8,9,10]
    nums.forEach(square)
}

// every()
// 该方法接受一个返回值为布尔类型的函数
// 如果对于所有的元素，该函数均返回true，则该方法返回true。
{
  function isEven(num) {
    return num % 2 == 0
  }
  let nums = [2,4,6,8,10]
  let even = nums.every(isEven)
  if (even) {
    console.log("all numbers are even")
  }
  else {
    console.log("not all numbers are even")
  }
}

// some() 
// 方法也接受一个返回值为布尔类型的函数
// 只要有一个元素使得该函数返回true，该方法就返回true

{
  function isEven(num) {
    return num % 2 == 0
  }
  let nums = [1,2,3,4,5,6,7,8,9,10]
  let someEven = nums.some(isEven)
  if (someEven) {
    console.log("some numbers are even")
  }
  else {
    console.log("no numbers are even")
  }
  nums = [1,3,5,7,9];
  someEven = nums.some(isEven)
  if (someEven) {
    console.log("some numbers are even")
  }
  else {
    console.log("no numbers are even")
  }
}

// reduce() 
// 该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数
// 直到数组中的最后一个元素，最后返回得到的累加值
// reduceRight() 方法，和reduce() 方法不同，它是从右到左执行
{
  function add(runningTotal, currentValue) {
    // console.log(runningTotal, currentValue)
    return runningTotal + currentValue
  }
  let nums = [1,2,3,4,5,6,7,8,9,10]
  let sum = nums.reduce(add)
  console.log(sum) // 55
}