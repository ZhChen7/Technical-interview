function ArrayList() {
    this.array = []

    ArrayList.prototype.insert = function (item) {
        this.array.push(item)
    }

    ArrayList.prototype.toString = function () {
        return this.array.join('-')
    }

    ArrayList.prototype.swap = function (m, n) {
        let temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }
    //实现排序算法
    //冒泡排序
    ArrayList.prototype.bubbles = function () {
        if (this.array === null || this.array.length < 2) return this.array
        let length = this.array.length
        for (let i = length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j + 1)
                }
            }
        }
    }

    //选择排序
    ArrayList.prototype.selectSort = function () {
        if (this.array === null || this.array.length < 2) return this.array
        let length = this.array.length
        for (let i = 0; i < length - 1; i++) {
            let min = i
            for (let j = i + 1; j < length; j++) {
                if (this.array[min] > this.array[j]) {
                    min = j
                }
            }
            this.swap(min, i)
        }

    }

    //插入排序
    ArrayList.prototype.insertSort = function () {
        if (this.array === null || this.array.length < 2) return this.array
        let length = this.array.length

        for (let i = 1; i < length; i++) {
            var temp = this.array[i]
            let j = i
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1]
                j--
            }
            this.array[j] = temp
        }
    }

    //高级排序
    //希尔排序 (对插入排序的升级)
    ArrayList.prototype.shellSort = function () {
        if (this.array === null || this.array.length < 2) return this.array
        let length = this.array.length
        //初始化增量
        var gap = Math.floor(length / 2)
        // whlie循环
        while (gap > 1) {
            for (let i = gap; i < length; i++) {
                let temp = this.array[i]
                let j = i
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap]
                    j -= gap
                }
                this.array[j] = temp
            }
            gap = Math.floor(gap / 2)
        }
    }

    //找到枢纽
    ArrayList.prototype.median = function (left, right) {
        //1.取出中间的位置
        let center = Math.floor((left + right) / 2)
        //2.判断大小，进行交换
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right)
        }
        if (this.array[left] > this.array[right]) {
            this.swap(left, right)
        }
        //3将 center换到 right-1 的位置
        this.swap(center, right - 1)
        return this.array[right - 1]
    }
    //快速排序(递归)（冒泡排序的升级版）（分而治之）
    ArrayList.prototype.quickSort = function () {
        this.quick(0, this.array.length - 1)
    }
    ArrayList.prototype.quick = function (left, right) {
        //1.结束条件
        if (left >= right) return

        //2.获取枢纽
        let pivot = this.median(left, right)

        //3.定义变量，用于记录当前中找到的位置
        let i = left
        let j = right - 1

        //开始进行交换
        while (true) {
            while (this.array[++i] < pivot) {}
            while (this.array[--j] > pivot) {}
            if (i < j) {
                this.swap(i, j)
            } else {
                break
            }
        }

        this.swap(i, right - 1)

        //分而治之
        this.quick(left,i-1)
        this.quick(i+1,right)
    }

}

let list = new ArrayList()
list.insert(5)
list.insert(1)
list.insert(3)
// list.insert(3)
// list.insert(23)
// list.insert(232)
// list.insert(136)
list.insert(7)

// list.bubbles()
// list.selectSort()
// list.insertSort()
// list.quickSort()
list.shellSort()


console.log(list.toString())
