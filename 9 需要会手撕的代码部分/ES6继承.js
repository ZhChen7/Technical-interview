class SuperType {
    constructor(name) {
        this.name = name
    }

    getName() {
        console.log(this.name)
    }
}

class SubType extends SuperType {
    constructor(name) {
        super(name)
    }

    getName() {
        console.log(this.name)
    }
}

let a = new SubType('ZC')

for (let item in a) {
    console.log(item)
}

