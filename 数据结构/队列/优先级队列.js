function priorityQueue() {
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.items = []
    priorityQueue.prototype.enqueue = function (element, priority) {
        let queueelement = new QueueElement(element, priority)
        if (this.items.length === 0) {
            this.items.push(queueelement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueelement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueelement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueelement)
            }
        }
    }


    //2.从队列中删除前端元素
    priorityQueue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3.查看一下前端元素
    priorityQueue.prototype.front = function () {
        return this.items[0]
    }

    //4.判断栈是否为空
    priorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    //5.获取栈中元素的个数
    priorityQueue.prototype.size = function () {
        return this.items.length
    }
    //6.toString方法
    priorityQueue.prototype.toString = function () {
        return this.items.toString().split(',').join(' ')
    }
}



let a=new priorityQueue()
a.enqueue('aa',123)
a.enqueue('cc',3)
a.enqueue('bb',1123)
a.enqueue('ee',213)
a.enqueue('ad',2)

console.log(a)


