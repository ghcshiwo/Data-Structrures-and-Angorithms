let Queue = require('./Queue')
let Dancer = require('./Dancer')
let fs = require('fs')
let path = require('path')
const dancers = fs
  .readFileSync(path.join(__dirname, 'dancers.txt'), 'utf8')
  .split('\r\n')

function getDancers(males, females) {
  for (let i = 0; i < dancers.length; i++) {
    dancers[i] = dancers[i].trim()
  }
  for (let i = 0; i < dancers.length; i++) {
    let dancer = dancers[i].split(' ')
    let sex = dancer[0]
    let name = dancer[1]
    if (sex == 'F') {
      females.enqueue(new Dancer(name, sex))
    } else {
      males.enqueue(new Dancer(name, sex))
    }
  }
}

function dance(males, females) {
  console.log('The dance partners are: \n')
  while (!females.isEmpty() && !males.isEmpty()) {
    let female = females.dequeue()
    let male = males.dequeue()
    console.log(
      'Female dancer is: ' +
        female.name +
        ' and the male dancer is: ' +
        male.name
    )
  }
}

/* ============= 测试 ============= */
let maleDancers = new Queue()
let femaleDancers = new Queue()
getDancers(maleDancers, femaleDancers)
dance(maleDancers, femaleDancers)

if (maleDancers.length() > 0) {
  console.log('There are ' + maleDancers.length() + ' male dancers waiting to dance.')
}
if (femaleDancers.length() > 0) {
  console.log('There are ' + femaleDancers.length() + ' female dancers waiting to dance.')
}
