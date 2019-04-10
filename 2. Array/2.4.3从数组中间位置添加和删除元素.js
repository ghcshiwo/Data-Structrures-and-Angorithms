// splice(index,howmany,item1,.....,itemX)
// index	              必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany	            必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX	  可选。向数组添加的新项目。

// 添加
{
  let nums = [1,2,3,7,8,9]
  nums.splice(3,0,4,5,6)
  console.log(nums) // [1,2,3,4,5,6,7,8,9]
}

// 删除
{
  let nums = [1,2,3,100,200,300,400,4,5]
  nums.splice(3,4)
  console.log(nums) // 1,2,3,4,5
}