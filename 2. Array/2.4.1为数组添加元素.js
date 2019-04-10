// push() 方法将元素添加到数组末尾
{
  let nums = [1,2,3,4,5]
  console.log(nums) // [1,2,3,4,5]
  nums.push(6)
  console.log(nums) // [1,2,3,4,5,6]
}
// unshift() 方法将元素添加在数组开头
{
  let nums = [2,3,4,5]
  console.log(nums) // [2,3,4,5]
  let newnum = 1
  nums.unshift(newnum);
  console.log(nums) // [1,2,3,4,5]
  nums = [3,4,5]
  nums.unshift(newnum,1,2)
  console.log(nums) // [1,2,3,4,5]
}