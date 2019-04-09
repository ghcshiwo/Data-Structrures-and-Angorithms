// 计算阶乘

function factorial(number) {
  if (number === 1) {
    return number
  }
  else {
    return number * arguments.callee(number - 1)
    // return number * factorial(number - 1) arguments.callee代表factorial
  }
}
  console.log(factorial(5)) // 120