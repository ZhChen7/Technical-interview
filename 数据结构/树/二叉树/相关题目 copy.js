// 先序遍历
function preroot(root, callback) {
    if (!root) {
        callback(root.key)
        preroot(root.left, callback)
        preroot(root.right, callback)
    }
}


function preroot(root) {
    let stack = [],
        result = []

    if (root != null) {
        stack.push(root)
    }

    while (stack.length !== 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.left !== null) {
            stack.push(temp.left)
        }

        if (temp.right !== null) {
            stack.push(temp.right)
        }

    }

}


//  中序遍历
function middleroot(root, callback) {
    if (!root) {
        middleroot(root.left, callback)
        callback(root.key)
        middleroot(root.right, callback)
    }
}

function middleroot(root) {
    let stack = [],
        result = []
    while (true) {
        while (root != null) {
            stack.push(root)
            root = root.le
        }

        if (stack.length == 0) {
            break
        }

        let temp = stack.pop()
        result.push(temp.key)
        stack.push(temp.right)
    }
}



// 后续遍历

function oldroot(root) {
    if (!root) {
        oldroot(root.left, callback)
        oldroot(root.right, callback)
        callback(root.key)
    }
}


function oldroot(root) {
    let stack = [],
        result = []

    if (root != null) {
        stack.push(root)
    }

    while (stack.length !== 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.right !== null) {
            stack.push(temp.right)
        }

        if (temp.left !== null) {
            stack.push(temp.left)
        }

    }

}


//广度优先遍历（递归）
function bfs(root) {
    let queue = [],
        result = []
    let pointer = 0
    if (root !== null) {
        queue.push(root)
    }

    let bfsFun = function () {
        let temp = queue[pointer]
        if (temp) {
            result.push(temp.key)
            if (temp.left) {
                queue.push(temp.left)
            }
            if (temp.right) {
                queue.push(temp.right)
            }
            pointer++
            bfsFun()
        }
    }
    bfsFun()
    return result
}

//递归
function bfs(root) {
    let queue = [],
        result = []

    let pointer = 0
    if (!root) {
        queue.push(root)
    }

    while (pointer < queue.length) {
        let temp = queue[pointer++]
        result.push(temp.key)
        temp.left && queue.push(temp.left)
        temp.right && queue.push(temp.right)
    }
    return result
}