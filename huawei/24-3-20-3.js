let input='5\n3 1 2 3\n3 3 4 5\n3 4 7 8\n2 5 6\n2 6 1';
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
  
    // 获取顶点的邻居
    getNeighbors(vertex) {
      return this.adjacencyList.get(vertex) || [];
    }

    //dfs
    dfs(startVertex) {
        const visited = new Set();

        const dfsHelper = (vertex) => {
            visited.add(vertex);

            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    const result = dfsHelper(neighbor);
                    if (result) {
                        return result; // 如果子递归发现环，直接返回
                    }
                } 
                // 如果邻居已经在当前递归栈中，说明找到了环
                else if (visited.has(neighbor)) {
                    return visited; // 直接返回当前的 visited Set
                }
            }

            visited.delete(vertex); // 回溯
            return null; // 没有找到环
        };

        return dfsHelper(startVertex);
    }
  }
let graph=new Graph();
let tokens=input.split('\n');
let n=parseInt(tokens[0]);
let start=parseInt(tokens[1].split(' ')[1]);
for(let i=1;i<=n;i++){
    let arr=tokens[i].split(' ').map(Number);
    let x=arr[0];
    for(let j=2;j<=x;j++){
        graph.addDirectedEdge(arr[1],arr[j]);
    }
}
let visited=graph.dfs(start);
let arr=[];
for(let x of visited){
    arr.push(x);
}
arr.sort((a,b)=>a-b);
arr.push(arr[0]);
console.log(arr.join(' '));