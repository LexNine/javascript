/* 
1.先把异步promise化
2.梳理逻辑上的操作顺序
3.组织为队列，按顺序执行
*/

//a和b两个异步，他们结果相加再进行c（异步）
{
    function a(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            },1500)
        })
    }
    function b(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2)
            },1000)
        })
    }
    function c(val){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val+3)
            },2000)
        })
    }
    /* Promise.all([a(), b()]).then((res) => {
        console.log(res) // [1, 2]
        c(res[0] + res[1]).then((res) => {
            console.log(res) // 6
        })
    }) */
    //上面是Promise.all的实现

    //下面是async/await的实现
    let arr=[set1,set2]
    //arr=[a,b,c]
    function set1(){
        return Promise.all([a(),b()])
    }
    function set2(val){
        let _val=val[0]+val[1]
        return c(_val);
    }
    async function run(){
        let res;
        for(let i=0;i<arr.length;i++){
            res=await arr[i](res)
        }
        return res
    }
    run().then((res) => {
        console.log(res) // 6
    })
}