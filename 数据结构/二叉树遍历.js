//前序遍历
function preNode(root, callback) {
    if (!root) {
        callback(root.key)
        preNode(root.left, callback)
        preNode(root.right, callback)
    }
}

function preNode(root) {
    let stack = [],
        result = []
    if (root != null) {
        stack.push(root)
    }
    while (stack.length != null) {
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

function middleNode(root) {
    let stack = [],
        result = []
    while (true) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }
        if (stack.length === 0) {
            break
        }
        let temp = stack.pop()
        result.push(temp.key)
        root = root.right
    }
    return result
}


function bfs(root) {
    let queue = [],
        result = []
    let pointer = 0
    if (root != null) {
        queue.push(root)
    }
    while (pointer < queue.length) {
        let temp = queue[pointer++]
        result.push(temp.key)
        if (temp.left != null) {
            queue.push(temp.left)
        }
        if (temp.right != null) {
            queue.push(temp.right)
        }
    }
}

function bfs(root) {
    let queue = [],
        result = []
    let pointer = 0
    if (root != null) {
        queue.push(root)
    }
    let bfsFun = function () {
        let temp = queue[pointer]
        if (temp) {
            result.push(temp.key)
            if (temp.left != null) {
                queue.push(temp.left)
            }
            if (temp.right != null) {
                queue.push(temp.right)
            }
            pointer++
            bfsFun()
        }
    }
    bfsFun()
    return result
}
