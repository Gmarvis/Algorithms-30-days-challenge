### Leetcode

# problem (11. Container With Most Water)

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

# Intuition

two pointer

### 2pointer

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

see solution for steps

# Complexity

-   Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

-   Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

### Brute-force attack

```js
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
	// iterate over the array of hights twice
	// initalize a varibly called Area to store results
	// intialize two pointers to compare the area between two points one in the first loop stating at zero and the other in the second loo starting one step ahead of the first pointer.
	// at every point in the first loop we calculate the area of the point at index of i and j
	let area = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			if (area < Math.min(height[i], height[j]) * (j - i)) {
				area = Math.min(height[i], height[j]) * (j - i);
			}
		}
	}
	return area;
};

console.log(maxArea(height));
```

### the Two pointer approuch

```js
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
	// define two pointer left and right
	// define a variable maxWater to store our results
	// in while loop
	// calculate the area between two pointer and update maxWater
	// check the shortest pointer and move it toward the other pointer

	let left = 0;
	let right = height.length - 1;
	let maxWater = 0;

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
```
