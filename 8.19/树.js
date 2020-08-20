function preRoot(root) {
    let stack = [],
        result = []

    if (root !== null) {
        stack.push(root)
    }

    while (stack.length !== 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.left !== null) {
            stack.push(temp.left)
        }
        if (temp.right !== null) {
            stack.push(right)
        }
    }
    return result
}

function middleRoot(root) {
    let stack = [],
        result = []

    while (true) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }

        if (stack.length == 0) {
            break
        }
        let temp = stack.pop()
        result.push(temp.key)
        stack.push(temp.right)
    }

}


function bfs(root) {
    let queue = [],
        result = []

    if (root !== null) {
        queue.push(root)
    }
    let pointer = 0
    while (pointer < queue.length) {
        let temp = queue[pointer++]
        result.push(temp.key)

        temp.left && queue.push(temp.left)
        temp.right && queue.push(temp.right)
    }
    return result
}

function getNum(root, key) {
    if (root == null || key < 0) {
        return
    }
    if (root !== null && k == 1) {
        return 1
    }
    return getNum(root.left, k - 1) + getNum(root.right, k - 1)
}