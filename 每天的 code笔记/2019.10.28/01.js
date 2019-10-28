// 实现 (5).add(3).minus(2)

Number.prototype.add = function (num) {
    return this.valueOf() + num

}

Number.prototype.minus = function (num) {
    return this.valueOf() - num
}

console.log((5).add(3).minus(2))


