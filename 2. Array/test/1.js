// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。

function StudentMarks () {
  this.marks = []
  this.addMark = addMark
  this.showMark = showMark
}

function addMark (mark) {
  this.marks.push(mark)
}

function showMark () {
  let total = this.marks.reduce((a,b) => a + b)
  return total / this.marks.length
}

function main () {
  let studentMarks = new StudentMarks()
  studentMarks.addMark(65)
  studentMarks.addMark(75)
  studentMarks.addMark(86)
  studentMarks.addMark(69)
  studentMarks.addMark(91)
  console.log(studentMarks.showMark())
}
main()