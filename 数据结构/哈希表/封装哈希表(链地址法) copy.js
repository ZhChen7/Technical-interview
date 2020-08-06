function HashTable() {
    this.storage = []
    this.count = 0
    this.size = 7


    HashTable.prototype.hashFun = function (str, size) {
        let hashCode = 0
        for (let i = 0; i < str.length; i++) {
            hashCode = hashCode * 37 + str.charCodeAt(i)
        }
        let index = hashCode % size
        return index
    }



    HashTable.prototype.put = (key, value) {
        let index = this.hashFun(key, this.size)

        let bucket = this.storage[index]


        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                tuple[1] = value
                return
            }
        }
        bucket.push([key, value])
    }
}