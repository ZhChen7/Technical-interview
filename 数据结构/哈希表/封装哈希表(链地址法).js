//链地址法
//装载因子（0.25，0.75）
function HashTable() {
    //属性
    this.storage = []   //存储的位置
    this.count = 0     // 数目
    this.limit = 7    //最终限制数组的大小

    //方法
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


    //插入&修改操作
    HashTable.prototype.put = function (key, value) {
        //1.根据key获取对应的 index
        let index = this.hashFunc(key, this.limit)
        // 2、根据 index 取出对应的 bucket
        let bucket = this.storage[index]

        //3、判断 bucket是否为空
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }
        //4、判断是否是修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                tuple[1] = value
                return
            }
        }
        //5.添加操作
        bucket.push([key, value])
        this.count++

        //判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            this.resize(this.limit * 2)
        } 

    }

    //获取操作
    HashTable.prototype.get = function (key) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket == null) {
            return false
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }
    }
    HashTable.prototype.remove = function (key) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket == null) {
            return null
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                bucket.splice(i, 1)
                this.count--

                //缩小容量
                if (this.limit > 7 && this.count < this.limit * 0.75) {
                    this.resize(Math.floor(this.limit / 2))
                }

                return tuple[1]
            }
        }
        return null
    }

    //哈希表的扩容、
    HashTable.prototype.resize = function (newLimit) {
        //1.保存旧的数据内容
        let oldStorage = this.storage
        //2. 重置所有的属性

        this.storage = []
        this.count = 0
        this.limit = newLimit


        //3.遍历 oldStorage 所有的 bucket
        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i]
            if (bucket == null) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[i]
                this.put(tuple[0], tuple[1])

            }
        }

    }

}


let a = new HashTable()
a.put('zc', '15')
a.put('zc1', '115')
a.put('z1', '115')
a.put('asd', '115')
a.put('wew', '115')
a.remove('wew')
console.log(a.get('wew'))


