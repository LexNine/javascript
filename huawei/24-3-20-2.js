let input='55 66 121 5 5';
let tokens=input.split(' ').map(Number);
let stack=[];
let sum=0;
for(let i=0;i<tokens.length;i++){
    if(stack.length&&sum>=tokens[i]){
        let cnt=0;
        let num=0;
        let ok=0;
        for(let j=stack.length-1;j>=0;j--){
            num+=stack[j];
            cnt++;
            if(num>tokens[i]){
                break;
            }
            if(num==tokens[i]){
                ok=1;
                for(let k=0;k<cnt;k++){
                    stack.pop();
                }
            }
        }
        if(ok==0){
            stack.push(tokens[i]);
            sum+=tokens[i];
        }else{
            stack.push(tokens[i]*2);
            sum+=tokens[i]*2;
        }
    }else{
        stack.push(tokens[i]);
        sum+=tokens[i];
    }
}
let l=stack.length;
for(let i=0;i<l;i++){
    console.log(stack.pop());
}
