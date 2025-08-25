let input='5 5\n10\n3\n10 2 3 4 5\n1 2 3 4 10\n1 2 3 10 5\n1 10 3 4 5\n1 2 3 4 5';
let tokens = input.split('\n');
let w=tokens[0].split(' ').map(Number)[0];
let h=tokens[0].split(' ').map(Number)[1];
let m=parseInt(tokens[1]);
let k=parseInt(tokens[2]);
let light=[];
for(let i=3;i<tokens.length;i++){
    light.push(tokens[i].split(' ').map(Number));
}
let r=[];
let x=(w-1)/2;
let y=(h-1)/2;
for(let i=0;i<w;i++){
    for(let j=0;j<h;j++){
        if(light[i][j]==m){
            let d=Math.abs(j-x)+Math.abs(i-y);
            r.push([d,j,i]);
        }
    }
}
r.sort((a,b)=>{
    if(a[0]!=b[0]) return a[0]-b[0];
    else if(a[1]!=b[1]) return a[1]-b[1];
    else return a[2]-b[2];
});
let xy=[];
while(r.length&&k>0){
    let dxy=r.shift();
    xy.push(dxy[1]);
    xy.push(dxy[2]);
    k--;
}
console.log(xy.join(' '));