function updateChildren(vnode, newVnode) {
    let children = vnode.children || []
    let newChildren = newVnode.children || []
    children.forEach((child, index) => {
        let newChild = newChildren[index]
        if (newChild == null) {
            return
        }
        if (child.tag === newChild.tag) {
            updateChildren(child, newChild)
        } else {
            replaceNode(child, newChild)
        }
    })
}
