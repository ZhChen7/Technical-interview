function preRoot(root) {
    let stack = [],
        result = []
    if (root != null) {
        stack.push(root)
    }
    while (stack.length != 0) {
        let temp = stack.pop()
        result.push(temp.key)
        if (temp.right!=null) {
            stack.push(temp.right)
        }
        if (temp.left!=null) {
            stack.push(temp.left)
        }
    }
    return result
}

function oldRoot(root) {
    let stack = [],
        result = []
    if (root != null) {
        stack.push(root)
    }
    while (stack.length != 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.left) {
            stack.push(temp.left)
        }
        if (temp.right) {
            stack.push(temp.right)
        }
    }
    return result.reverse()
}


