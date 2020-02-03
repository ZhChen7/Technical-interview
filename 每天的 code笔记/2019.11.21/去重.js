// const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1.indexOf( arr1[i])+'----'+i)
//     if (arr1.indexOf( arr1[i] ) === i) {
//         arr2.push( arr1[i] );
//     }
// }
//
// console.log( arr2 );
// // [1, 2, 3, 5, 4]
// console.log( arr1 );
// // [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]

const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4,'zc','xxx','xxx'];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]