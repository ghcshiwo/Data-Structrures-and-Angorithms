// 被赋值的数组增加了一个新的引用 ,此为【浅复制】
{
  let nums = [1,2,3,4,5]
  let samenums = nums
  nums[0] = 400
  console.log(samenums[0]) // 400
}

// 【深复制】，将原数组中的每一个元素都复制一份到新数组中
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i]
  }
}

{
  let nums = [1,2,3,4,5]
  let samenums = []
  copy(nums, samenums)
  nums[0] = 400
  console.log(samenums[0]) // 1
}