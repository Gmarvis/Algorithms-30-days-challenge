// we first define and pointer to keep track of the position where we are at
// loop through the array
// check if the element is not equal zero then set nums at the index of pointer to element. then incease pointer by 1
// lastly we loop over the remaining array starting at index to the length of the array replacing each element withh zero
let nums = [0, 1, 0, 3, 12];
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

console.log(moveZeroes(nums));
