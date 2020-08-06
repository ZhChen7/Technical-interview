function Stack() {
    //栈中的属性
    this.items = []

    //1.压入栈push()
    Stack.prototype.push = function (...element) {
        this.items.push(...element)
    }

    //2.从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    //3.查看一下栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    //4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    //5.获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.items.length
    }
    //6.toString方法
    Stack.prototype.toString = function () {
        return this.items.toString().split(',').join(' ')
    }
}

// function dec2bin(decNumber) {
//     let stack = new Stack()
//     while (decNumber > 0) {
//         stack.push(decNumber % 2)
//         decNumber = Math.floor(decNumber / 2)
//     }
//     let binaryString = ''
//     while (!stack.isEmpty()) {
//         binaryString += stack.pop()
//     }
//     return binaryString
// }

// console.log(dec2bin(20))


function dectobin(decNumber) {
    let stack = new Stack()
    while (decNumber > 0) {
        stack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }
    let binaryString = ''
    while (!stack.isEmpty) {
        binaryString += stack.pop()
    }
    return binaryString
}