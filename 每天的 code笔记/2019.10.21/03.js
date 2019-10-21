function f() {}
f.prototype.sayhi=function (name) {
    this.name=name
}

var a=new f()
console.log(f.prototype)  //f { sayhi: [Function] }
console.log(f.prototype.constructor) //[Function: f]
console.log(a.__proto__)  //f { sayhi: [Function] }
console.log(f.__proto__)  //[Function]
