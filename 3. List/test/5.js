// 为影碟租赁程序创建一个check-in() 函数，当客户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表中
// 实现一个类似Redbox 的影碟租赁自助查询系统
const fs = require('fs')
const path = require('path')
const List = require('../List') 
const Customer = require('../Customer') 

const movies = fs.readFileSync(path.join(__dirname, '../films.txt'), 'utf8').split("\r\n")
let movieList = new List()
let movieCheckOutList = new List()
let customers = new List()


function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie)
    customerList.append(c)
    movieCheckOutList.append(movie)
    filmList.remove(movie)
    displayList(movieCheckOutList)
  }
  else {
    console.log(movie + " is not available.")
  }
}

function checkIn(name, movie, filmList, customerList) {
  if (movieCheckOutList.contains(movie)) {
    filmList.append(movie)
    movieCheckOutList.remove(movie)
    displayList(movieCheckOutList)
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
checkOut("Jane Doe", "The Matrix", movieList, customers)
checkOut("Jane Doe", "Inception", movieList, customers)
// displayList(movieList)
// displayList(customers)

checkIn("Jane Doe", "The Godfather", movieList, customers)