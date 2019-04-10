// reverse() 将数组中元素的顺序进行翻转

{
  let nums = [1,2,3,4,5]
  nums.reverse()
  console.log(nums) // [5,4,3,2,1]
}

// sort() 方法是按照字典顺序对元素进行排序的
{
  let names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"]
  names.sort()
  console.log(names) // Bryan,Clayton,Cynthia,David,Mike,Raymond
}

{
  let nums = [3,1,2,100,4,200]
  nums.sort()
  console.log(nums) // [1,100,2,200,3,4]
}

// sort() 函数使用了compare() 函数对数组按照数字大小进行排序，而不是按照字典顺序
function compare(num1, num2) {
  return num1 - num2
}
{
  var nums = [3,1,2,100,4,200]
  nums.sort(compare)
  console.log(nums) // 1,2,3,4,100,200
}