// 哈希函数
HashTable.prototype.hashFunc = function (str, size) {
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
