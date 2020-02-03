// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

function Getdate(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
   return arr
}


Getdate([1, 2, 3, 4, 5, 6, 7], 3)
Getdate([-1, -100, 3, 99], 2)