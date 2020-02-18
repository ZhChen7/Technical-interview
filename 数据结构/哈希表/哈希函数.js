// 哈希函数
function hashFunc(str, size) {
    //1、定义 hashCode变量
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
        //2、霍纳算法，来计算hashCode的值
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    //3、取余操作
    let index = hashCode % size
    return index
}

console.log(hashFunc('abc',7))
console.log(hashFunc('fnj',7))
console.log(hashFunc('3sd',7))
console.log(hashFunc('ain',7))
