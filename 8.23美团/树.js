//1、求二叉树中的节点个数
function getNum(root) {
    if (!root) {
        return
    }
    return getNum(root.left) + getNum(root.right) + 1
}

function getmaxDeep(root) {
    if (!root) {
        return
    }
    return Math.max(getmaxDeep(root.left), getmaxDeep(root.right)) + 1
}

function getminDep(root) {
    if (!root) {
        return
    }

    let left = minDepth(root.left)
    let right = minDepth(root.right)
    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1

}

function preroot(root) {
    let stack = [],
        result = []

    if (root !== null) {
        stack.push(root)
    }

    while (stack.length) {
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
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        if (stack.length === 0) {
            return
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


function knum(root, k) {
    if (root == null || k < 0) {
        return
    }
    if (root !== null && k == 1) {
        return 1
    }
    return knum(root.left, k - 1) + knum(root.right, k - 1)
}



function getPath(){
    
}