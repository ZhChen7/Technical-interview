function Queue() {
    //栈中的属性
    this.items = []

    //1.压入栈push()
    Queue.prototype.enqueue = function (...element) {
        this.items.push(...element)
    }

    //2.从队列中删除前端元素
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3.查看一下前端元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    //4.判断栈是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    //5.获取栈中元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }
    //6.toString方法
    Queue.prototype.toString = function () {
        return this.items.toString().split(',').join(' ')
    }
}

let s = new Queue()
s.enqueue(1,2,3,4)

console.log(s)



