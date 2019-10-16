var findMedianSortedArrays = function(nums1, nums2) {
    var arr=[...nums1,...nums2].sort((a,b)=>a-b)
    var length=nums1.length+nums2.length
    if (length%2!=0){
            return arr[(length-1)/2].toFixed(1)
    }else{
        return (arr[length/2]+arr[length/2-1])/2
    }
};

console.log(findMedianSortedArrays([1,3],[2,4,7]))
