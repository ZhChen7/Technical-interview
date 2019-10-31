// {1:222, 2:123, 5:888}


var obj = {1: 222, 2: 123, 5: 888}
function f(obj) {
    obj.length = 13
    return Array.from(obj).slice(1).map(item = > {
        return  item === undefined ? null : item
    })
}
console.log(f(obj))


// let obj = {1:222, 2:123, 5:888};
// obj.length = 12;
// let _obj = Array.from(obj).slice(1);
//
// console.log(_obj)
//
// let newObj =  _obj.map((item) => {if(item === undefined) {return null;} else {return item;}});
// console.log(newObj);