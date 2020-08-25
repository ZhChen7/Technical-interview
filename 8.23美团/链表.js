function linklist() {
    function node(data) {
        this.data = data
        this.next = null
    }
    this.head = null
    this.length = 0

    linklist.prototype.append = function (data) {
        let newNode = new node(data)
        if (this.head == null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
            this.length++
        }

    }

}