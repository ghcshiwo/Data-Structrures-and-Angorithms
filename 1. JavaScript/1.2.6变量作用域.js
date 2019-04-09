// JavaScript 中的变量作用域被定义为函数作用域
// 函数外定义一个变量，那么该变量拥有全局作用域
// 在函数内定义变量时省略了关键字var会引发变量提升， 变成全局变量
// let 块级变量

for (var i = 1; i <= 10; ++i ) {
  console.log("Hello, world!")
}
for (let j = 1; j <= 10; ++j ) {
  console.log("Hello, world!")
}
console.log(i) // 11
console.log(j) // ReferenceError: j is not defined