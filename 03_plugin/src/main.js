import { showName } from './js/foo.js'
const { sayHello } = require('./js/bar.js')

// 浏览器是不支持CommonJS 模块化规范的，需要使用webpack 来进行打包
showName();
sayHello();

console.log('env', env)