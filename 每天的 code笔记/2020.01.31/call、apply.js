let arr = [1, 2, 19, 6];
Math.max.call(null, ...arr)
Math.max.apply(null, arr)
var fn=Math.max.bind(null,...arr)
fn()
