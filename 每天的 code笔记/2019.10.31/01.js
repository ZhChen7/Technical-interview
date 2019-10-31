//例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

// function intersection(num1,num2) {
//     return num1.filter((item)=>num2.indexOf(item)>-1)
// }
//
// console.log(intersection([1, 2, 2, 1,3,3],[2, 2,3,1]))

var nums1 = [1, 2, 2, 1], nums2 = [2, 2, 3, 4];
// 1.
// 有个问题， [NaN].indexOf(NaN) === -1
var newArr1 = nums1.filter(function(item) {
    return nums2.indexOf(item) > -1;
});

// 2.
var newArr2 = nums1.filter((item) => {
    return nums2.includes(item);
});