let input='2 11 4\n0 1\n1 9\n0 10\n3 8';
let tokens=input.split('\n');
let m=parseInt(tokens[0].split(' ')[0]);
let n=parseInt(tokens[0].split(' ')[1]);
let x=parseInt(tokens[0].split(' ')[2]);
let arr=[];
for(let i=1;i<=x;i++){
    arr.push(tokens[i].split(' ').map(Number));
}
let max=0;
for(let i=0;i<2**x;i++){
    let seat=new Array(n).fill(0);
    let num=0;
    let flag=0;
    //转为二进制
    let str=i.toString(2).padStart(x,'0');//这段代码的作用是将一个数字 i 转换为二进制字符串，并确保其长度为 x，不足的部分在前面用 '0' 补全。
    for(let j=0;j<str.length;j++){
        if(str[j]=='1'){
            let x=arr[j][0];
            let y=arr[j][1];
            for(let k=x;k<y;k++){
                if(seat[k]>m){
                    flag=1;
                    break;
                }
                seat[k]++;
                if(seat[k]>m){
                    flag=1;
                    break;
                }
            }
            num+=y-x;
        }
    }
    if(flag==0){
        max=Math.max(max,num);
    }
}
console.log(max);
