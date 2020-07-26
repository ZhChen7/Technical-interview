class SuperType {
    constructor(age) {
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }
}

class SubType extends SuperType {
    constructor(age, name) {
        super(age); // 调用父类的constructor(x, y)
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

let instance = new SubType(22, '刘小夕');
instance.getAge(); //22


