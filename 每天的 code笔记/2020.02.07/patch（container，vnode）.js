function createElement(vnode) {
    let tag = vnode.tag
    let attrs = vnode.attr || {}
    let children = vnode.children || []
    let elem = document.createElement(tag)
    for (let attrName in attrs) {
        if (attr.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    children.forEach((childVnode) => {
        elem.append(createElement(childVnode))
    })
    return elem
}
