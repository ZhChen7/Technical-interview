function linkedList() {
    function Node(data) {
        this.data = data
        this.next = null
    }

    this.head = null
    this.length = 0


    linkedList.prototype.append=function (data) {
        let newnode = new Node(data)
        if(this.head === null){
            this.head = newnode
        }else{
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next =newnode
        }
        this.length++
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
     linkedList.prototype.reverse=function () {
        let current = this.head
        let NodeTemp = null
         while(current!=null){
            let nextNode = current.next
             current.next = NodeTemp
             NodeTemp = current
             current = nextNode
         }
          return NodeTemp
     }

}

let list = new linkedList()
list.append('1')
list.append('2')
list.append('3')
list.append('4')
list.append('5')
console.log(list.toString())
console.log(list.reverse())



