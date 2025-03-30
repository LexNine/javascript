ES6 的主要特性
let 和 const
引入了块级作用域的变量声明方式，取代了 var 的全局或函数作用域。

箭头函数（Arrow Functions）
简化了函数的写法，例如：
const add = (a, b) => a + b;

模板字符串（Template Literals）
支持多行字符串和嵌入表达式，例如：
const name = "World";
console.log(`Hello, ${name}!`);


解构赋值（Destructuring Assignment）
方便地从数组或对象中提取值，例如：
const [a, b] = [1, 2];
const { name, age } = { name: "Alice", age: 25 };

默认参数（Default Parameters）
允许函数参数设置默认值，例如：
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

类和模块（Classes and Modules）
引入了 class 关键字，支持面向对象编程，例如：
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

Promise
提供了更好的异步编程支持，例如：
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

模块化（Modules）
支持 import 和 export 语法，例如：
// math.js
export const add = (a, b) => a + b;
// main.js
import { add } from './math.js';
console.log(add(2, 3));

扩展运算符（Spread Operator）和剩余参数（Rest Parameters）
例如：
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

Symbol 类型
引入了一种新的原始数据类型 Symbol，用于创建唯一的标识符。