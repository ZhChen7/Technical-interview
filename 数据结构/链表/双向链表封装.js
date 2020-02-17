function doubleLinkedList() {
    function Node(data) {
        this.data =data
        this.pre=null
        this.next = null
    }
    this.head = null
    this.tail= null
    this.length = 0


    doubleLinkedList.prototype.append = function (data) {
        let newnode = new Node(data)
        if(this.length ===0){
            this.head = newnode
            this.tail = newnode
        }else{
            newnode.pre=this.tail
            this.tail.next =newnode
            this.tail.next=newnode
        }
        this.length++
    }

}
