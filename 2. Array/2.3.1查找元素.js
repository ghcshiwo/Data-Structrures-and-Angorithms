// indexOf() 
// 用来查找传进来的参数在目标数组中是否存在
// 如果目标数组包含该参数，就返回该元素在数组中的索引
// 如果不包含，就返回-1

{
  let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"]
  console.log(names.indexOf('Cynthia')) // 1
  console.log(names.indexOf('Joe'))  // -1
}

// lastIndexOf()
// 相同元素中最后一个元素的索引
// 如果没找到相同元素，则返回-1
{
  let names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"]
  let name = "Mike"
  console.log(names.indexOf(name)) // 1
  console.log(names.lastIndexOf(name)) // 5
}