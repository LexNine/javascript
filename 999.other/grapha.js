class Graph {
    constructor() {
      // 使用Map来存储邻接表
      this.adjacencyList = new Map();
    }
  
    // 添加顶点
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // 添加边（无向图）
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      
      // 添加双向边
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }

      // 添加带权边
    addWeightedge(vertex1, vertex2, weight) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    
    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
    }

  
    // 添加有向边
    addDirectedEdge(fromVertex, toVertex) {
      if (!this.adjacencyList.has(fromVertex)) {
        this.addVertex(fromVertex);
      }
      if (!this.adjacencyList.has(toVertex)) {
        this.addVertex(toVertex);
      }
      
      this.adjacencyList.get(fromVertex).push(toVertex);
    }
  
    // 打印图
    printGraph() {
      for (const [vertex, edges] of this.adjacencyList) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  
    // 获取顶点的邻居
    getNeighbors(vertex) {
      return this.adjacencyList.get(vertex) || [];
    }

    //bfs
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex); // 访问顶点
  
        const neighbors = this.getNeighbors(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }

    //dfs
    dfs(startVertex) {
      const visited = new Set();
      this._dfsHelper(startVertex, visited);
    }
    _dfsHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex); // 访问顶点
  
      const neighbors = this.getNeighbors(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this._dfsHelper(neighbor, visited);
        }
      }
    }
  }
  let graph=new Graph();
  graph.addEdge('0','1');
  graph.addEdge('2','1');
  graph.addEdge('0','3');
  graph.addEdge('4','1');
  graph.addEdge('2','5');
  graph.addEdge('3','4');
  graph.addEdge('4','5');
  graph.addEdge('3','6');
  graph.addEdge('4','7');
  graph.addEdge('5','8');
  graph.addEdge('6','7');
  graph.addEdge('7','8');

 //两个节点的所有最短路径
  function findAllShortestPaths(graph, start, end) {
    const queue = [[start]]; // 队列，存储路径
    const visited = new Set(); // 访问过的节点
    const allPaths = []; // 存储所有最短路径
    let minLength = Infinity; // 最短路径长度

    while (queue.length > 0) {
      const path = queue.shift(); // 获取当前路径
      const node = path[path.length - 1]; // 当前节点

      if (node === end) { // 到达终点
        if (path.length < minLength) { // 更新最短路径长度
          minLength = path.length;
          allPaths.length = 0; // 清空之前的路径
        }
        if (path.length === minLength) { // 如果是最短路径，添加到结果中
          allPaths.push(path);
        }
        continue;
      }

      for (const neighbor of graph.getNeighbors(node)) { // 遍历邻居节点
        if (!visited.has(neighbor)) { // 如果没有访问过
          visited.add(neighbor); // 标记为已访问
          queue.push([...path, neighbor]); // 添加到队列中
        }
      }
    }

    return allPaths; // 返回所有最短路径
  }