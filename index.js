height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
	// define two pointer left and right
	// define a variable maxWater to store our results
	// in while loop
	// calculate the area between two pointer and update maxWater
	// check the shortest pointer and move it toward the other pointer

	let left = 0;
	let right = height.length - 1;
	let maxWater = 0

	while (left < right) {
		let length = Math.min(height[left], height[right]);
		let width = right - left;
		let area = length * width;
		maxWater = Math.max(maxWater, area);

		if (height[left] < height[right]) {
			left += 1;
		} else right -= 1;
	}

	return maxWater;
};

console.log(maxArea(height));
