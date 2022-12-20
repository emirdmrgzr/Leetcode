/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxToplam = nums[0];
    let current = maxToplam;
    for (let i = 1; i < nums.length; i++) {
        if (current < 0) {
            current = nums[i];
        } else {
            current += nums[i];
        }
        if (current > maxToplam) {
            maxToplam = current;
        }
    }
    return maxToplam;
};