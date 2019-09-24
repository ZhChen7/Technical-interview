var str = '大家好  阿斯蒂芬阿斯顿\n发生的发生';
function fn(str) {
    var s = str.replace(/\t\n\v\r\f+/g,'');
    return s;
}
console.log(fn(str))
