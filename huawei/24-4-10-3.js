let input='4\n1 0 0 0\n0 1 2 0\n0 1 1 4\n0 0 3 1\n1 3';
let tokens = input.split('\n');
let n=parseInt(tokens[0]);
let v=[];
let graph = new Map();
for(let i=1;i<=n;i++){
    v.push(tokens[i].split(' ').map(Number));
    graph.set(i-1,new Map());
}
let start=tokens[n+1].split(' ').map(Number);
let r=new Map();
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i!=j&&v[i][j]) {
            graph.get(i).set(j,v[i][j]);
        }
    }
}
console.log(graph);
for(let i=0;i<start.length;i++){
    let smax=1;
    if(graph.get(start[i]).size){
        let v=10;
        let visited
    }
    r.set(start[i],smax);
}

