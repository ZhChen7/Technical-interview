function linkedList() {
    function node(data) {
        this.data = data
        this.next = null
    }

    this.head = null
    this.length = 0


    linkedList.prototype.append = function (data) {
        let newnode = new node(data)
        if (this.head == null) {
            this.head = newnode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newnode
            this.length++
        }
    }
    linkedList.prototype.find =function(data){
        let current = this.head
        while(current.next){
            if(current.data ===data){
                break
            }
            current = current.next
        }
        return current
    }

    linkedList.prototype.fixed=function(data,newdata){
           let current= this.find(data)
           current.data= newdata
    }

    linkedList.prototype.prefind =function(data){
        let current = this.head
        while(current.next){
            if(current.next.data ===data){
                break
            }
            current = current.next
        }
        return current
    }

    linkedList.prototype.delete = function (data) {

            if(this.head.data === data){
                this.head = this.head.next
                return
            }
            let prenode=this.prefind(data)
            let current=this.find(data)
            prenode = current.next
    }

    linkedList.prototype.toString = function () {
        let result = ''
        let current = this.head
        while (current) {
            result += current.data + "->"
            current = current.next
        }
        return result
    }

}
let a = new linkedList()
a.append('abc')
a.append('abcd')
a.append('abcde')
console.log(a.toString())

a.fixed('abc',11111)
console.log(a.toString())
