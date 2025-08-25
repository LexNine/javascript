let input='12\nf k\na b 2\nb c 2\nc d 2\nd e 2\nf b 3\nb g 3\ng h 2\nh i 3\nj h 2\nh e 3\ne k 2\nk l 4\n0000';
let tokens = input.split('\n');
console.log(tokens);
let n=parseInt(tokens[0]);
let map=new Map();
let start=tokens[1].split(' ')[0];
let end=tokens[1].split(' ')[1];
let queen=[];
let path=[];
let pre=new Map();
let distance=new Map();
for(let i=2;i<tokens.length-1;i++){
    let a=tokens[i].split(' ')[0];
    let b=tokens[i].split(' ')[1];
    let c=parseInt(tokens[i].split(' ')[2]);
    if(!map.has(a)){
        map.set(a,new Map());
    }
    if(!map.has(b)){
        map.set(b,new Map());
    }
    map.get(a).set(b,c);
    map.get(b).set(a,c);
}
for(const [key, value] of map) {
    if(key===start){
        queen.push([key,0]);
        distance.set(key,0);
    }else{
        queen.push([key,Infinity]);
        distance.set(key,Infinity);
    }
    pre.set(key,null);
}
while(queen.length>0){
    queen.sort((a,b)=>a[1]-b[1]);
    let cur=queen.shift();
    let curNode=cur[0];
    let curDis=cur[1];
    if(curNode===end){
        let node=end;
        while(node!==null){
            path.unshift(node);
            node=pre.get(node);
        }
        break;
    }
    for(const [key, value] of map.get(curNode)){
        let newDis=curDis+value;
        if(newDis<distance.get(key)){
            distance.set(key,newDis);
            pre.set(key,curNode);
            for(let i=0;i<queen.length;i++){
                if(queen[i][0]===key){
                    queen[i][1]=newDis;
                    break;
                }
            }
        }
    }
}
console.log(path.join(' '));