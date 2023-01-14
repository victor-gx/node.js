// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)  //true

const username = 'zs'
exports.username = username
exports.age = 20
exports.sayHello = function() {
    console.log("hello")
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象