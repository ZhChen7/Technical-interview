function Set() {
    this.items={}

    Set.prototype.add=function (data) {
        if(this.has(data)){
            return false
        }
        this.items[data]= data
        return true
    }

    Set.prototype.has=function () {
        return this.items.hasOwnProperty()
    }

}
