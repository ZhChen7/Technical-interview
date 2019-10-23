// var a = {
//     i: 1,
//     toString() {
//         return a.i++;
//     }
// }
//
// console.log(a)
//
// if( a == 1 && a == 2 && a == 3 ) {
//     console.log(1);
// }

//
// var aﾠ=1;
// var a=2;
// var ﾠa = 3;
// if(aﾠ==1 && a== 2 &&ﾠa==3) {
//     console.log("1")
// }

// const a = {
//     i: 1,
//     toString: function () {
//         return a.i++;
//     }
// }

// var a=[1,2,3]
// // a.join= a.shift
// //
// // if(a == 1 && a == 2 && a == 3) {
// //     console.log('1');
// // }

// var i = 0;
//
// with({
//     get a() {
//         return ++i;
//     }
// }) {
//     if (a == 1 && a == 2 && a == 3)
//         console.log("1");
// }

var val = 0;
Object.defineProperty(window, 'a', {
    get: function() {
        return ++val;
    }
});
if (a == 1 && a == 2 && a == 3) {
    console.log('yay');
}