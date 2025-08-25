let input='5\n162700,client1,factorA,10\n162700,client2,factorB,15\n162700,client1,factorA,5\n162700,client1,factorB,8\n162700,client2,factorB,20\n2\nfactorA,5\nfactorB,7';
let tokens=input.split('\n');
let n=parseInt(tokens[0]);
let m=parseInt(tokens[n+1]);
let priceMap=new Map();
let clientMap=new Map();
let clientList=[];
for(let i=n+2;i<m+n+2;i++){
    priceMap.set(tokens[i].split(',')[0],parseInt(tokens[i].split(',')[1]));
}
for(let i=1;i<n+1;i++){
    let client=tokens[i].split(',')[1];
    let factor=tokens[i].split(',')[2];
    let time=parseInt(tokens[i].split(',')[3]);
    if(time<0||time>100) time=0;
    let price=priceMap.get(factor);
    if(!clientMap.has(client)){
        clientMap.set(client,time*price);
        clientList.push(client);
    }else{
        let newPrice=clientMap.get(client)+time*price;
        clientMap.set(client,newPrice);
    }
}
clientList.sort();
for(let i=0;i<clientList.length;i++){
    console.log(clientList[i]+','+clientMap.get(clientList[i]));
}