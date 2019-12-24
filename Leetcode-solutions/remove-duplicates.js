/**
 * DESCRIPTION
 * Given a sorted array nums, remove the duplicates in-place such that each 
 * element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 */

/**
 * SOLUTION 1
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0
    if (nums.length === 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return ++j;
};

/**
 * SOLUTION 2
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i+1]) {
            if ((nums[i] === nums[i+1])) {
                nums.splice(i, 1); // Romove '1' element at index position 'i'
            }
        }
    }
    return nums;
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);