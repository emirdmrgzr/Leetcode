/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let count = 0;
    if(nums.includes(target) == false){
        return -1;
    }else{
        for(let i = 0;i<nums.length;i++){
            count++;
            if(nums[i] == target){
                return count-1;
            }
        }
    }
    
};