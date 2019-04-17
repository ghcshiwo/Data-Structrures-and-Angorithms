class Vertex {
  constructor(label) {
    this.label = label
  }
}

class Graph {
  constructor(v) {
    this.vertices = v
    this.edges = 0
    this.adj = []
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = []
    }
    this.edgeTo = []
    this.marked = []
    for (let i = 0; i < this.vertices; ++i) {
      this.marked[i] = false
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }

  showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
      process.stdout.write(i + '->')
      for (var j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined)
          process.stdout.write(this.adj[i][j] + ' ')
      }
      console.log()
    }
  }

  dfs(v) {
    this.marked[v] = true
    if (this.adj[v] != undefined) {
      console.log('Visited vertex: ' + v)
    }
    this.adj[v].forEach(w => {
      if (!this.marked[w]) {
        this.dfs(w)
      }
    })
  }

  bfs(s) {
    var queue = []
    this.marked[s] = true
    queue.push(s) // 添加到队尾
    while (queue.length > 0) {
      var v = queue.shift() // 从队首移除
      if (v == undefined) {
        print('Visisted vertex: ' + v)
      }
      this.adj[v].forEach(w => {
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          this.marked[w] = true
          queue.push(w)
        }
      })
    }
  }
}

module.exports = Graph
