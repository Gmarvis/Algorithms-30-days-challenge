### Leetcode

# problem (Increasing Triplet Subsequence)

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

1. loop over the array keeping track of elements at each index

# Complexity

-   Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

-   Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```js
const increasingTriplet = (nums) => {
    let a = Infinity;
    let b = Infinity;
    let c = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (a >= nums[i]) a = nums[i];
        else if (b >= nums[i]) b = nums[i];
        else if (c >= nums[i]) return true;
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); //false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
```
