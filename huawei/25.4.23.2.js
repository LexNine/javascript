let input='7\n1 2 3 1 2 3 1\n3 1 2 3 1 2 1';
let tokens = input.split('\n');
let n=parseInt(tokens[0]);
let ini=tokens[1].split(' ').map(Number);
let tar=tokens[2].split(' ').map(Number);
let ans=0;
let dfs=function(i,f){
    if(i>=n||ini[i]==0) return;
    let cur=(ini[i]+f)%3;
    let need=(tar[i]-cur+3)%3;
    ans+=need;
    let nf=(f+need)%3;
    dfs(2*i+1,nf);
    dfs(2*i+2,nf);
}
dfs(0,0);
console.log(ans);
