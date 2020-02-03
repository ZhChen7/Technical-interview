var person = {
    name: 'Yvette',
    hobbies: ['reading', 'photography']
}
var person1 = Object.create(person);
person1.name = 'Jack';
person1.hobbies.push('coding');

console.log(person1.name)

var person2 = Object.create(person);

console.log(person2.name)
console.log(person2.hobbies)

// person2.name = 'Echo';
// person2.hobbies.push('running');
// console.log(person.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]
// console.log(person1.hobbies);//[ 'reading', 'photography', 'coding', 'running' ]
