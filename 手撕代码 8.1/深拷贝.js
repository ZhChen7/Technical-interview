function getType(target){
    return Object.prototype.toString.call(target).slice(8,-1)
}

console.log(getType([1,2,3,45]));
console.log(getType('123'))