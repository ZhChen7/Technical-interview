function BinarySerachTree() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 属性
    this.root = null


    //方法
    //插入 递归
    BinarySerachTree.prototype.insert = function (key) {
        let newnode = new Node(key)
        if (this.root === null) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }
    }

    //递归插入函数
    BinarySerachTree.prototype.insertNode = function (node, newnode) {
        if (newnode.key < node.key) {  //向左查找
            if (node.left == null) {
                node.left = newnode
            } else {
                this.insertNode(node.left, newnode)
            }
        } else {  //向右查找
            if (node.right == null) {
                node.right = newnode
            } else {
                this.insertNode(node.right, newnode)
            }
        }
    }

    //先序遍历(什么时候处理根节点)
    BinarySerachTree.prototype.preOrderTravesal = function (hander) {
        this.preOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.preOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过的节点
            hander(node.key)
            //处理经过节点的左子节点
            this.preOrderTravesalNode(node.left, hander)
            //处理经过节点的右子节点
            this.preOrderTravesalNode(node.right, hander)
        }
    }
    //非递归写法(先序)
    BinarySerachTree.prototype.preroot = function () {
        let stack = [],
            result = []

        if (this.root != null) {
            stack.push(this.root)
        }

        while (stack.length != 0) {
            let temp = stack.pop()
            result.push(temp.key)

            if (temp.right != null) {
                stack.push(temp.right)
            }
            if (temp.left != null) {
                stack.push(temp.left)
            }
        }
        return result
    }

    //中序遍历（非递归）
    BinarySerachTree.prototype.middleroot = function () {
        let stack = [],
            result = []
        while (true) {
            while (this.root != null) {
                stack.push(this.root)
                this.root = this.root.left
            }
            if (stack.length == 0) {
                break
            }
            let temp = stack.pop()
            result.push(temp.key)
            this.root = temp.right
        }
        return result
    }

    //后序遍历(非递归)
    BinarySerachTree.prototype.oldroot = function () {
        let stack = [],
            result = []
        if (this.root != null) {
            stack.push(this.root)
        }
        while (stack.length != 0) {
            let temp = stack.pop()
            result.push(temp.key)
            if (temp.left != null) {
                result.push(temp.left)
            }
            if (temp.right != null) {
                result.push(temp.right)
            }

        }
        return result.reverse()
    }

    //广度优先遍历（递归）
    BinarySerachTree.prototype.bfsRoot = function () {
        let stack = [],
            result = []
        let count = 0
        stack.push(this.root)
        let bfs = function () {
            let node = stack[count]
            if (node) {
                result.push(node.key)
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
                count++
                bfs()
            }
        }
        bfs()
        return result
    }

    //广度优先遍历（非递归）
    BinarySerachTree.prototype.bfsRootnotdigui = function () {
        let result = []
        let queue = []
        queue.push(this.root)
        let pointer = 0
        while (pointer < queue.length) {
            let node = queue[pointer++]
            result.push(node.key)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        return result
    }


    //中序遍历
    BinarySerachTree.prototype.midOrderTravesal = function (hander) {
        this.midOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.midOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过节点的左子节点
            this.midOrderTravesalNode(node.left, hander)

            //处理经过的节点
            hander(node.key)

            //处理经过节点的右子节点
            this.midOrderTravesalNode(node.right, hander)
        }
    }

    //后序遍历
    BinarySerachTree.prototype.postOrderTravesal = function (hander) {
        this.postOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.postOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过节点的左子节点
            this.midOrderTravesalNode(node.left, hander)

            //处理经过节点的右子节点
            this.midOrderTravesalNode(node.right, hander)

            //处理经过的节点
            hander(node.key)
        }
    }


    BinarySerachTree.prototype.max = function () {
        let node = this.root
        let key = null
        while (node !== null) {
            key = node.key
            node = node.right
        }
        return key
    }

    BinarySerachTree.prototype.min = function () {
        let node = this.root
        let key = null
        while (node !== null) {
            key = node.key
            node = node.left
        }
        return key
    }

    BinarySerachTree.prototype.search = function (key) {
        let node = this.root
        while (node != null) {
            if (key < node.key) {
                node = node.left
            } else if (key > node.key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }
    //
    // BinarySerachTree.prototype.remove = function (key) {
    //
    //     let current = this.root
    //     let parent = null
    //     let isLeftChild = true
    //
    //     //1、寻找要删除的节点
    //     while (key !== current.key) {
    //         parent = current
    //         if (key < current.key) {
    //             isLeftChild = true
    //             current = current.left
    //         } else {
    //             isLeftChild = false
    //             current = current.right
    //         }
    //         if (current === null) return false
    //     }
    //
    //
    //     //2、根据对应的情况删除节点
    //     //2.1 删除的节点是叶子节点
    //     if (current.left === null && current.right === null) {
    //         if (current == this.root) {
    //             this.root = null
    //         } else {
    //             if (isLeftChild) {
    //                 parent.left = null
    //             } else {
    //                 parent.right = null
    //             }
    //         }
    //     }
    //     //2.2 删除的节点只有一个节点
    //     else if (current.right == null) {
    //         if (current == this.root) {
    //             this.root = current.left
    //         } else if (isLeftChild) {
    //             parent.left = current.left
    //         } else {
    //             parent.right = current.left
    //         }
    //     else if (current.left == null) {
    //             if (current == this.root) {
    //                 this.root = current.right
    //             } else if (isLeftChild) {
    //                 parent.left = current.right
    //             } else {
    //                 parent.right = current.right
    //             }
    //         }
    //     }
    //
    //     //2.3 删除的节点有两个节点
    //
    // }


}


let a = new BinarySerachTree()

a.insert(1)
a.insert(2)
a.insert(3)
a.insert(4)
a.insert(5)
a.insert(8)
a.insert(6)
a.insert(7)


// console.log(a.preOrderTravesal(function (value) {
//     console.log(value)
// }))
// console.log(a.preroot())
// console.log(a.middleroot())
// console.log(a.oldroot())
console.log(a.bfsRoot())
console.log(a.bfsRootnotdigui())



