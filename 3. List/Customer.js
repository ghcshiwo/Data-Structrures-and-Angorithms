class Customer {
  constructor (name, movie) {
    this.name = name
    this.movie = movie
  }
  getName () {
    return this.name
  }
  getMovie () {
    return this.movie
  }
}

module.exports = Customer