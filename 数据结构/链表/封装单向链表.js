function linkedList() {
    function Node(data) {
        this.data = data
        this.next = null
    }
    this.head = null
    this.length = 0

    linkedList.prototype.append = function (data) {
        let newnode = new Node(data)
        if (this.length === 0) {
            this.head = newnode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newnode
        }
        this.length++
    }


    linkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false
        let newnode = new Node(data)
        if (position === 0) {
            newnode.next = this.head
            this.head = newnode
        } else {
            let index = 0
            let current = this.head
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newnode.next = current
            current.next = newnode
        }
        this.length++

    }
    linkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        return current.data
    }
    linkedList.prototype.indexOf=function(data){
        let current = this.head
        let index = 0

        while(current){
            if(current.data === data){
                   return index
            }
            current  = current.next
            index++
        }
    }


    linkedList.prototype.toString = function () {
        let result = ''
        let current = this.head
        while (current) {
            result += current.data + " "
            current = current.next
        }
        return result
    }
}

let a = new linkedList()
a.append('abc')
a.append('abcd')
a.append('abcde')
console.log(a)
a.insert(0,'asdasd')
console.log(a.toString())
console.log(a.get(0))
console.log(a.indexOf('abcde'))


