// PROBLEM DESCRIPTION
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Solution 1.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target && i < j) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([1,3,4,2], 6));;