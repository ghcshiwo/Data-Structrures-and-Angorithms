// join() 和 toString()
// 这两个方法都返回一个包含数组所有元素的字符串，各元素之间用逗号分隔开

let names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]
let namestr = names.join()
console.log(namestr) // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString()
console.log(namestr) // David,Cynthia,Raymond,Clayton,Mike,Jennifer
console.log(names) // David,Cynthia,Raymond,Clayton,Mike,Jennifer