const HashTable = require('./HashTable')

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function genStuData(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let num = ''
    for (let j = 1; j <= 9; ++j) {
      num += Math.floor(Math.random() * 10)
    }
    num += getRandomInt(50, 100)
    arr[i] = num
  }
}

let numStudents = 10
let students = new Array(numStudents)
genStuData(students)
console.log('Student data: \n')
for (let i = 0; i < students.length; ++i) {
  console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9))
}
console.log('\n\nData distribution: \n')
let hTable = new HashTable()
for (let i = 0; i < students.length; ++i) {
  hTable.put(students[i])
}
hTable.show()
