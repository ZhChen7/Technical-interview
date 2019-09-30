function strCount(str, target) {
    let count = 0
    if (!target) return count
    while(str.match(target)) {
        str = str.replace(target, '')
        count++
    }
    return count
}

console.log(strCount('abcdef abcdef a', 'abc'))
