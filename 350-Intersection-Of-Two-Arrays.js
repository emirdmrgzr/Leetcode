/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    const myArray = [];
    for(let i = 0;i<nums1.length;i++){
        for(let j = 0;j<nums2.length;j++){
            if(nums1[i] == nums2[j]){
                nums2[j] = null;
                myArray.push(nums1[i]);
                break;
            }
        }
    }
    return myArray;
};