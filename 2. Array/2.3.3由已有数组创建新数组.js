// concat() 方法可以合并多个数组创建一个新数组
{
  let cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
  let dmpDept = ["Raymond", "Cynthia", "Bryan"]
  let itDiv = cisDept.concat(dmpDept)
  console.log(itDiv)
  itDiv = dmpDept.concat(cisDept)
  console.log(itDiv)
}

// slice() 方法可从已有的数组中返回选定的元素
// slice() 方法不会直接对数组进行修改
{
  let itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]
  let dmpDept = itDiv.slice(1,3) //取1和2
  let cisDept = itDiv
  console.log(dmpDept) // ["Clayton","Terrill"]
  console.log(cisDept) // ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]
}

// splice() 方法截取一个数组的子集创建一个新数组
// splice() 方法会直接对数组进行修改
{
  let itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]
  let dmpDept = itDiv.splice(3,3)
  let cisDept = itDiv
  console.log(dmpDept) // ["Raymond","Cynthia","Danny"]
  console.log(cisDept) // ["Mike","Clayton","Terrill","Jennifer"]
}

