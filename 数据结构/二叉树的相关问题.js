//1、求二叉树中的节点个数
function getNum(root) {
    if (root == null) {
        return
    }
    return getNum(root.left) + getNum(root.right) + 1
}


//2、求二叉树的最大层数(最大深度)
function getmaxDeep(root) {
    if (root == null) {
        return
    }
    return Math.max(getmaxDeep(root.left), getmaxDeep(root.right)) + 1

}

//3.二叉树的最小深度
function getminDeep(root) {
    if (root == null) {
        return
    }
    let left = getminDeep(root.left)
    let right = getminDeep(root.right)
    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1
}


// 4、求二叉树第K层的节点个数
function getknum(root, k) {
    if (root == null || k < 0) {
        return
    }
    if (root != null && k == 1) {
        return 1
    }
    return getknum(root.left, k - 1) + getknum(root.right, k - 1)
}

// 5、求二叉树第K层的子节点个数
function getksonnum(root) {
    if (root == null) {
        return
    }
    if (root != null && k == 1) {
        if (root.left == null && root.right == null) {
            return 1
        } else {
            return 0
        }
    }
    return getknum(root.left, k - 1) + getknum(root.right, k - 1)
}

// 6.反转二叉树
function reverseRoot(root) {
    if (root == null) {
        return
    }
    let temp = reverseRoot(root.left)
    root.left = reverseRoot(root.right)
    root.right = temp
}

// 7、求二叉树的直径
function longerlength(root) {
    let path = 0
    getlongerlength(root)
    return path

    function getlongerlength(root) {
        if (root == null) {
            return
        }
        let left = getlongerlength(left)
        let right = getlongerlength(right)
        path = Math.max(path, left + right)
        return Math.max(left, right) + 1
    }
}

// 二叉树中和为某一值的路径
function getnPath(root, target) {
    let result = []
    if (root) {
        findPath(root, target, [], 0, result)
    }
    return result

    function findPath(root, target, stack, sum, result) {
        stack.push(root.key)
        sum += root.key
        if (!root.left && !root.right && sum === target) {
            result.push(stack.slice(0))
        }
        if (root.left) {
            findPath(root.left, target, stack, sum, result)
        }
        if (root.right) {
            findPath(root.left, target, stack, sum, result)
        }
        stack.pop()
    }
}


// 按之字形顺序打印二叉树
function zhiRoot(root) {
    let stack1 = [],
        stack2 = [],
        result = []

    if (root != null) {
        stack1.push(root)
    }
    let flag = 1
    while (stack1.length != 0 || stack2.length != 0) {
        const list = []
        if (flag % 2) {
            while (stack1.length != 0) {
                let temp = stack2.pop()
                list.push(temp.key)
                temp.left && stack2.push(temp.left)
                temp.right && stack2.push(temp.right)
            }
        } else {
            while (stack2.length != 0) {
                let temp = stack1.pop()
                list.push(temp.key)
                temp.left && stack1.push(temp.left)
                temp.right && stack1.push(temp.right)
            }
        }
        i++
        result.push(list)
    }
    return result
}


function Print(root) {
    const result = [];

    if (root === null) {
        return result;
    }

    const stack1 = [];
    const stack2 = [];

    stack1.push(root);
    let flag = 1;
    while (stack1.length !== 0 || stack2.length !== 0) {
        const list = [];
        if (flag % 2) {
            while (stack1.length !== 0) {
                const temp = stack2.pop()
                list.push(temp.val);
                temp.left && stack2.push(temp.left)
                temp.right && stack2.push(temp.right)
            }
        } else {
            while (stack2.length !== 0) {
                const temp = stack1.pop()
                list.push(tmp.val);
                temp.left && stack1.push(temp.left)
                temp.right && stack1.push(temp.right)
            }
        }
        i++;
        result.push(list);
    }
    return result;
}











