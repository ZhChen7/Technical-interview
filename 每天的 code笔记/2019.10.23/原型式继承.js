

// var person = {
//     name: 'Yvette',
//     hobbies: ['reading', 'photography']
// }
// var person1 = Object.create(person);
// person1.name = 'Jack';
// person1.hobbies.push('coding');
// var person2 = Object.create(person);
// person2.name = 'Echo';
// person2.hobbies.push('running');
// console.log(person.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]
// console.log(person1.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]









function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function a() {
    name:'zc'
}

var obj1=object(a)
console.log(obj1.name)





