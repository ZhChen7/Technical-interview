// const bar = new Bar(); // it's ok
// function Bar() {
//     this.bar = 42;
// }
//
// const foo = new Foo(); // ReferenceError: Foo is not defined
// class Foo {
//     constructor() {
//         this.foo = 42;
//     }
// }


// var Foo = function() {
//     this.foo = 21;
// };
// const  a=1
// {
//     const foo = new Foo(); // ReferenceError: Foo is not defined
//     console.log(foo)
//     class Foo {
//         constructor() {
//             this.foo = 37;
//         }
//     }
// }

// 引用一个未声明的变量
// function Bar() {
//     baz = 42; // it's ok
// }
// const bar = new Bar();
// console.log(bar)
//
//
// class Foo {
//     constructor() {
//         this.fol = 42; // ReferenceError: fol is not defined
//     }
// }
// const foo = new Foo();
//

// 引用一个未声明的变量
// function Bar() {
//     this.bar = 42;
// }
// Bar.answer = function() {
//     return 42;
// };
// Bar.prototype.print = function() {
//     console.log(this.bar);
// };
//
// const barKeys = Object.keys(Bar); // ['answer']
// const barProtoKeys = Object.keys(Bar.prototype); // ['print']
//
// class Foo {
//     constructor() {
//         this.foo = 42;
//     }
//     static answer() {
//         return 42;
//     }
//     print() {
//         console.log(this.foo);
//     }
// }
// const fooKeys = Object.keys(Foo); // []
// const fooProtoKeys = Object.keys(Foo.prototype); // []
//
//
//


// function Bar() {
//     this.bar = 42;
// }
// Bar.prototype.print = function() {
//     console.log(this.bar);
// };
//
// const bar = new Bar();
// const barPrint = new bar.print(); // it's ok
//
//
//
//
// class Foo {
//     constructor() {
//         this.foo = 42;
//     }
//     print() {
//         console.log(this.foo);
//     }
// }
// const foo = new Foo();
// const fooPrint = new foo.print(); // TypeError: foo.print is not a constructor

// function Bar() {
//     this.bar = 42;
// }
// const bar = Bar(); // it's ok
// console.log(bar)
//
//
// class Foo {
//     constructor() {
//         this.foo = 42;
//     }
// }
// const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'

class Foo {
    constructor() {
        this.foo = 42;
        // Foo = 'Fol'; // TypeError: Assignment to constant variable
    }
}
const foo = new Foo();
console.log( typeof  foo)

Foo = 'Fol'; // it's ok


const  f= new Fol()
console.log(f)







