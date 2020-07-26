function object(o){
    function f(){}
    f.prototype = o
    return new f()
}

function createAnother(obj){
    let clone = object(obj)
    clone.sayHi = function(){
        console.log('hi')
    }
    return clone;
}


var person = {
    name: 'Yvette',
    hobbies: ['reading', 'photography']
};

var person2 = createAnother(person);
person2.sayHi(); //hi