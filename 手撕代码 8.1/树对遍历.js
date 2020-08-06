function preroot(root) {
    let stack = [],
        result = []

    if (root != null) {
        stack.push(root)
    }

    while (stack.length != 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.left !== null) {
            stack.push(temp.left)
        }

        if (temp.right !== null) {
            stack.push(temp.right)
        }
    }
    return result
}


function middleRoot(root) {
    let stack = [],
        result = []

    while (true) {
        if (root !== null) {
            stack.push(root)
            root = root.left
        }

        if (stack.length === 0) {
            break
        }

        let temp = stack.pop()
        result.push(temp.key)
        stack.push(temp.right)
    }
    return result
}


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

        temp.left && stack.push(temp.left)
        temp.right && stack.push(temp.right)

    }

    return queue

}