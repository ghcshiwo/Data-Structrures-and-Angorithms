Array.matrix = function(numrows, numcols, initial) {
  let arr = []
  for (let i = 0; i < numrows; ++i) {
    let columns = []
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial
    }
    arr[i] = columns
  }
  return arr
}