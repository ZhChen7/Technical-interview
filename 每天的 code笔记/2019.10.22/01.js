function f() {
    this.name='zc'
}
f.prototype.say=function () {
    console.log(this.name)
}

function f1() {

}

f1.prototype = new f()



console.log(new f1().name)

