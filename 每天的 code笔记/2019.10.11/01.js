var obj = {};

function test() {
    console.log(this === obj);
}

test(); //false

var testObj = test.bind(obj);
testObj();  //true
