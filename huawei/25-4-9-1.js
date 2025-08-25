let input='3\nBF0001 AZ0001\nAZ0001 NA\nBF00011 AZ0001';
let tokens=input.split('\n');
let n=parseInt(tokens[0]);
let map=new Map();
let set=new Set();
let arr=[];
let brr=[];
for(let i=1;i<=n;i++){
    let a=tokens[i].split(' ')[0];
    let b=tokens[i].split(' ')[1];
    map.set(a,b);
    if(b!== 'NA'){
        set.add(b);
    }
}
for(let i=1;i<=n;i++){
    let a=tokens[i].split(' ')[0];
    if(!set.has(a)){
        arr.push(a);
    }
}
let depth=new Map();
let getDepth=function(node){
    if(depth.has(node)) return depth.get(node);
    else if(map.get(node) === 'NA'){
        depth.set(node,0);
        return 0;}
    else{
        let temp=1+getDepth(map.get(node));
        depth.set(node,temp);
        return temp;
    }
}
let max=0;
for(let i=0;i<arr.length;i++){
    if(getDepth(arr[i])>max){
        max=getDepth(arr[i]);
    }
}
for(let i=0;i<arr.length;i++){
    if(getDepth(arr[i])===max){
        brr.push(arr[i]);
    }
}
console.log(brr.sort().join(' '));

