//使用迭代的方式实现flatten函数
/**
 * 使用递归的方式处理
 * wrap内保存结果ret
 * 返回一个递归函数
 *
 * @returns
 */

var arr=[1,2,3,[4,5],[6,[7,[8]]]]
console.log(wrap()(arr))

function wrap() {
    var ret=[]
    return function flatten(arr) {
        for (let item of arr){
            if (item.constructor === Array){
                   ret.concat(flatten(item))
            }else{
                 ret.push(item)
            }
        }
        return ret
    }
}




