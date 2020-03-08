//1、求二叉树中的节点个数
function getNodenum(root) {
    if (root == null) {
        return
    }
    return getNodenum(root.left) + getNodenum(root.right) + 1
}

//2、求二叉树的最大层数(最大深度)
function maxDepth(root) {
    if (root == null) {
        return
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

}

//3.二叉树的最小深度
function minDepth(root) {
    if (root == null) return
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1
}

//4.先序遍历（递归）
function preroot(root, callback) {
    if (root != null) {
        callback(root.key)
        preroot(root.left, callback)
        preroot(root.right, callback)
    }

}

//先序遍历（非递归）
function preroot(root) {
    let stack = [],
        result = []
    if (root != null) {
        stack.push(root)
    }
    while (stack.length != 0) {
        let temp = stack.pop()
        result.push(temp.key)

        if (temp.left != null) {
            stack.push(temp.left)
        }
        if (temp.right != null) {
            stack.push(temp.right)
        }
    }
    return result
}

//5 中序遍历（递归）
function middleroot(root, callback) {
    if (root != null) {
        preroot(root.left, callback)
        callback(root.key)
        preroot(root.right, callback)
    }
}

//5.1 中序遍历（非递归）
function middleroot(root) {
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
    return result
}


//分层遍历（递归）
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

//分层遍历（非递归）
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


// 按之字形顺序打印二叉树
function zhiroot(root) {
    let queue = [],
        result = []
    if (root !== null) {
        queue.push(root)
    }
    let pointer = 0
    let flag = 1
    while (pointer < queue.length) {
        let temp = queue[pointer++]
        result.push(temp.key)
        if(flag%2 == 1){
            temp.right && queue.push(temp.right)
            temp.left && queue.push(temp.left)
        }else{
            temp.left && queue.push(temp.left)
            temp.right && queue.push(temp.right)
        }
        flag++
    }
    return result
}



//7、求二叉树第K层的节点个数
function getknum(root,k) {
    if(root ==null ||k<0){
        return
    }
    if(root!==null &&k==1){
        return 1
    }
    return getknum(root.left,k-1)+getknum(root.right,k-1)
}

//8.求二叉树第K层的叶子节点个数
function getksonnum(root,k) {
    if(root ==null ||k<0){
        return
    }
    if (root!=null&& k==1){
        if(root.left==null&&root.right==null){
            return 1
        }else{
            return 0
        }
    }
    return getksonnum(root,k-1)+getksonnum(root,k-1)
}


//反转二叉树
function reverseRoot(root) {
    if(root ==null){
        return
    }

    let temp = root.left
    root.left = reverseRoot(root.right)
    root.right = reverseRoot(temp)

    return root
}


// 求二叉树的直径
function longerlength(root) {
    let path=0
    getlongerlength(root)
    return path
    function getlongerlength(root){
        if(root ==null){
            return
        }
        let left = longerlength(root.left)
        let right = longerlength(root.right)
        path = Math.max(path,left+right)
        return Math.max(left,right)+1
    }
}

// 二叉树中和为某一值的路径
function getPath(root,target) {
    let result=[]
    if(root){
        findPath(root,target,[],0,result)
    }
    return result

    function findPath(root,target,stack,sum,result) {
        stack.push(root.key)
        sum+=root.key
        if(!root.left && !root.right&&sum ===target){
            result.push(stack.slice(0))
        }
        if(root.left){
            findPath(root.left,target,stack,sum,result)
        }
        if(root.right){
            findPath(root.right,target,stack,sum,result)
        }
        stack.pop()
    }

}

//给定一棵二叉搜索树，请找出其中的第k小的结点。(中序遍历+ k小)

