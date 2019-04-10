// 创建Person 类，该类用于保存人的姓名和性别信息
// 创建一个至少包含10 个Person 对象的列表
// 写一个函数显示列表中所有拥有相同性别的人
const List = require('../List') 
const Person = require('../Person') 
let peoples = new List()

peoples.append(new Person("Aaron", "male"))
peoples.append(new Person("Clayton", "male"))
peoples.append(new Person("Raymond", "male"))
peoples.append(new Person("Cynthia", "female"))
peoples.append(new Person("Jennifer", "female"))
peoples.append(new Person("Bryan", "male"))
peoples.append(new Person("Danny", "male"))
peoples.append(new Person("Hayley", "female"))
peoples.append(new Person("Park", "male"))
peoples.append(new Person("Nancy", "female"))

function displaySameSex (sex) {
  return peoples.getList().filter(person => person.sex === sex)
}

console.log(displaySameSex('male'))
console.log(displaySameSex('female'))