function linkedlist() {
    function Node(data) {
        this.data = data
        this.next = null
    }
    this.head = null
    this.length = 0

    linkedlist.prototype.append = function (data) {
        let newnode = new Node(data)
        if (this.head == null) {
            this.head = newnode
        } else {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = newnode
            this.length++
        }
    }

    linkedlist.prototype.fixed=function(data,newdata){
        let current= this.find(data)
        current.data= newdata
    }

    linkedlist.prototype.find =function (data) {
        let current = this.head
            while(current){
                if (current.data === data){
                    break
                }
                current = current.next
            }
            return current
    }
    linkedlist.prototype.prefind =function (data) {
        let current = this.head
        while(current.next){
            if (current.next.data === data){
                break
            }
            current = current.next
        }
        return current
    }


    linkedlist.prototype.delete = function (data) {
        if(this.head.data === data){
            this.head = this.head.next
            return
        }
        let prenode=this.prefind(data)
        let current=this.find(data)
        prenode = current.next
    }
}

let linktest = new linkedlist()

linktest.append(1)
linktest.append(2)
linktest.append(3)
linktest.append(4)

console.log(linktest.find(2))
