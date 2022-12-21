/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const merge = (nums1, m, nums2, n) => {
    let location = nums1.length - 1
    nums2.forEach(n => {
         nums1.splice(location, 1, n), location--;
         });
    nums1.sort((a, b) => a - b)
  };