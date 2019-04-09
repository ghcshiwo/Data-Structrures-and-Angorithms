function Checking(amount) {
  this.balance = amount
  this.deposit = deposit
  this.withdraw = withdraw
  this.toString = toString
}

// 存款
function deposit(amount) {
  this.balance += amount
}

// 取款
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount
  }
  if (amount > this.balance) {
    console.log("余额不足")
  }
}

function toString() {
  return "余额: " + this.balance
}
var account = new Checking(500)
account.deposit(1000)
console.log(account.toString()) //余额: 1500
account.withdraw(750)
console.log(account.toString()) // 余额：750
account.withdraw(800) // 显示"余额不足"
console.log(account.toString()) // 余额：750