// while 循环

{
  let number = 1
  let sum = 0
  while (number < 11) {
    sum += number
    ++number
  }
  console.log(sum) // 55
}
// for 循环

{
  let number = 1
  let sum = 0
  for (number = 1; number < 11; number++) {
    sum += number
  }
  console.log(sum) // 55
}

// 原书例子为var， 本实例使用es6的let