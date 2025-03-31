/* 
setTimeout理解
setTimeout(fn)==>setTimeout()立即执行，fn函数加入宏任务队列
*/

/* promise */
/* {
    new Promise((resolve, reject) => {
        //创建一个promise对象，传入一个回调函数，这一步是同步的
        //此时promise的状态是pending
        //resolve和reject是两个函数，resolve用于改变promise的状态为fulfilled，reject用于改变promise的状态为rejected
        //并将then或catch方法传入的回调函数放入微任务队列中
    }).then(() => {
        //调用then方法是同步的，传入的回调函数会被放入微任务队列中
        //then方法的返回值是一个新的promise对象，状态是pending
        //如果then方法的回调函数执行成功，则新的promise对象的状态为fulfilled
    }).catch(() => {
        //调用catch方法也是同步的，传入的回调函数会被放入微任务队列中
    })
} */

/* {
    setTimeout(() => {
        console.log('set1')
    })
    new Promise((resolve) => {
        console.log('promise1')
        resolve()
    }).then(() => {
        console.log('then1')
    })
    console.log('log1')

    //promise1
    //log1
    //then1
    //set1
} */

{
    async function async1(){
        console.log('async1')
    }
    async function async2(){
        console.log('async2 start')
        await async1()//await会暂停async2的执行，把async2的后续代码放入微任务队列中
        console.log('async2 end')
    }
    setTimeout(function(){
        console.log('setTimeout')
    },0)
    console.log('script start')
    async2()
    new Promise(function(resolve){
        console.log('promise1')
        resolve()
    }).then(function(){
        console.log('promise2')
    })
    console.log('script end')
}