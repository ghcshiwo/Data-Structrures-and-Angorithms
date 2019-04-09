// 有返回值的函数
function factorial(number) {
  var product = 1
  for (var i = number; i >= 1; --i) {
    product *= i
  }
  return product
}

console.log(factorial(4)) // 24
console.log(factorial(5)) // 120
console.log(factorial(10)) // 3628800

// 无返回值的函数

function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount
  }
}

var grades = [77, 73, 74, 81, 90]
curve(grades, 5)
console.log(grades) // [ 82, 78, 79, 86, 95 ]

// 函数参数除对象是引用传递，其余都是值传递