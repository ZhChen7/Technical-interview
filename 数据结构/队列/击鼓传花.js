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


function passGame(nameList, num) {
    let queue = new Queue()
    queue.enqueue(...nameList)
    for (let i = 0; i < num - 1; i++) {
        queue.enqueue(queue.dequeue())
    }
    queue.dequeue()

    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    console.log(queue.front())
    return nameList.indexOf(queue.front())
}


let a= passGame(['aa','bb','cc','dd','ee'],3)

console.log(a)
