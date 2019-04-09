// if-else 语句

var mid = 25
var high = 50
var low = 1
var current = 13
var found = -1
if (current < mid) {
  mid = (current-low) / 2
}
else if (current > mid) {
  mid = (current+high) / 2
}
else {
  found = current
}

// JavaScript 中的switch 用来判断的表达式可以是任意类型，不仅限于整型
// C++ 和Java 等一些语言就要求该表达式必须为整型

// switch 语句
function switchMonth(mounth) {
  var monthName = ''
  switch (mounth) {
    case "1":
      monthName = "January"
      break
    case "2":
      monthName = "February"
      break
    case "3":
      monthName = "March"
      break
    case "4":
      monthName = "April"
      break
    case "5":
      monthName = "May"
      break
    case "6":
      monthName = "June"
      break
    case "7":
      monthName = "July"
      break
    case "8":
      monthName = "August"
      break
    case "9":
      monthName = "September"
      break
    case "10":
      monthName = "October"
      break
    case "11":
      monthName = "November"
      break
    case "12":
      monthName = "December"
      break
    default:
      monthName = "Bad input"
  }
  console.log(monthName) 
}

// 
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter a month number: ', (mounth) => {
  switchMonth(mounth)
  rl.close()
})