### Leetcode

# 28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

> 1 <= haystack.length, needle.length <= 104
> haystack and needle consist of only lowercase English characters.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

1- make a nested loop throw the string(haystack)
where at every index of the string(haystack),
we loop throw the target string(needle)

     --loop throw the string(haystack)
     defined a variable "isMatch" that defines wether the strings match or not
     -- ON the j loop we loop throw throw the target string(needle)
         check if the chart at each index match at both index
         if they match we set isMatch variable to true
         if they don't match we set it to false and then break
     lastly we check its a match we return the index else we return -1

# Complexity

-   Time complexity: O(n*m)
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
var strStr = function (haystack, needle) {
    // **********pseudo code**********

    // 1- make a nested loop throw the string(haystack)
    // where at every index of the string(haystack),
    // we loop throw the target string(needle)

    // --loop throw the string(haystack)
    // defined a variable "isMatch" that defines wether the strings match or not
    // -- ON the j loop we loop throw throw the target string(needle)
    //     check if the chart at each index match at both index
    //     if they match we set isMatch variable to true
    //     if they don't match we set it to false and then break
    // lastly we check its a match we return the index else we return -1

    if (!needle) return 0;

    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};
```
