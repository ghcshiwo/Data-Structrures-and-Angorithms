// 实现一个类似Redbox 的影碟租赁自助查询系统
const fs = require('fs')
const path = require('path')
const List = require('./List') 
const Customer = require('./Customer') 

const movies = fs.readFileSync(path.join(__dirname, 'films.txt'), 'utf8').split("\r\n")
let movieList = new List()
let customers = new List()


function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    let c = new Customer(name, movie)
    customerList.append(c)
    filmList.remove(movie)
  }
  else {
    console.log(movie + " is not available.")
  }
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()["name"] + ", " +
      list.getElement()["movie"]);
    }
    else {
      console.log(list.getElement());
    }
  }
}

for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i])
}
checkOut("Jane Doe", "The Godfather", movieList, customers)
displayList(movieList)
displayList(customers)