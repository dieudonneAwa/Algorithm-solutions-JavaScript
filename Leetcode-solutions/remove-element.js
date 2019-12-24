/**
 * DESCRIPTION
 * Given an array nums and a value val, remove all instances
 * of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must
 * do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * SOLUTION 1
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    while (i <= nums.length - 1) {
        if (nums.includes(val)) {
            let index = nums.indexOf(val)
            nums.splice(index, 1);
            i--;
        }
        i++;
    }
    return nums.length;
};

removeElement([3,3],3);