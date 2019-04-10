const List = require('./List') 
let names = new List()
names.append("Clayton")
names.append("Raymond")
names.append("Cynthia")
names.append("Jennifer")
names.append("Bryan")
names.append("Danny")

for(names.front(); names.currPos() <= names.length()-1; names.next()) {
  console.log(names.getElement())
}

// for(names.end(); names.currPos() >= 0; names.prev()) {
//   console.log(names.getElement())
// }