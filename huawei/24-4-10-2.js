let input='5\n0 0 50 0 0\n0 0 0 25 0\n50 0 0 0 15\n0 25 0 0 0\n0 0 15 0 0';
let tokens=input.split('\n');
let n=parseInt(tokens[0]);
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(tokens[i].split(' ').map(Number));
}
console.log(arr);