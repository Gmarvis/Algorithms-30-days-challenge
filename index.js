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
