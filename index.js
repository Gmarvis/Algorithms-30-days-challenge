/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = [];

    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    // first calculate the produccts of all elements to the left

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // secondly calculate the products of all elements to the right

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4, 5]));
