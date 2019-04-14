const HashTable = require('./HashTable')

let someNames = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
]

let hTable = new HashTable()
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
}
hTable.show()
