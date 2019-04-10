// 3. 修改本章前面出现过的weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
function monthTemps () {
  this.dataStore = []
  this.add = add
  this.monthAverage = monthAverage
  this.weekAverage = weekAverage
  this.allWeekAverage = allWeekAverage
}

function add (week, data) {
  if (!this.dataStore[week]) this.dataStore[week] = []
  this.dataStore[week].push(data)
}

function monthAverage () {
  return this.dataStore.map(a => a.reduce((x, y) => x + y) / a.length).reduce((a, b) => a + b) / this.dataStore.length
}

function weekAverage (week) {
  return this.dataStore[week].reduce((a, b) => a + b) / this.dataStore[week].length
}

function allWeekAverage () {
  return this.dataStore.map(a => a.reduce((x, y) => x + y)).reduce((a, b) => a + b) / this.dataStore.length
}

function main () {
  let month = new monthTemps()
  month.add(0,78)
  month.add(1,45)
  month.add(1,25)
  month.add(1,77)
  month.add(1,32)
  month.add(2,48)
  month.add(2,65)
  month.add(3,49)
  month.add(3,36)
  month.add(3,58)
  month.add(4,34)
  month.add(4,78)
  month.add(4,21)

  console.log(month.weekAverage(1))
  console.log(month.weekAverage(2))
  console.log(month.weekAverage(3))
  console.log(month.weekAverage(4))
  console.log(month.monthAverage())
  console.log(month.allWeekAverage())
}

main()