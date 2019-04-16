const BST = require('./Tree')

let nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
let min = nums.getMin()
console.log('The minimum value of the BST is: ' + min)
let max = nums.getMax()
console.log('The maximum value of the BST is: ' + max)
let value = 37
let found = nums.find(value)
if (found != null) {
  console.log('Found ' + value + ' in the BST.')
} else {
  console.log(value + ' was not found in the BST.')
}
