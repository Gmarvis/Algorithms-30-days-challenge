### Leetcode

# problem (Move Zeroes)

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

1. we first define and pointer to keep track of the position where we are at
2. loop through the array
3. check if the element is not equal zero then set nums at the index of pointer to element. then incease pointer by 1
4. lastly we loop over the remaining array starting at index to the length of the array replacing each element withh zero

# Complexity

-   Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

-   Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```js
var moveZeroes = function (nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};
```
