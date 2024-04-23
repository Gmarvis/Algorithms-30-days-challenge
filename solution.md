### Leetcode

# problem (Can Place Flower)

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

1. define a variable as results and set it to true and a counter and 0
2. check if n = 0 set results to true and return
3. check i flowerbed lengh is == 1 and flowerbed at the firsts index = 0 return true else return false
4. loop over flowerbed check is flowerbeb[i] = 0 and i = 0 check flowerbed[i+1] == 0 increment counter by one then set flowerbed[i] == 1
5. else if flowerbed at the last index = i and flowerbed[i-1] = 0 then coounter + 1 flowerbed[1] = 1
6. if flowerbed[i-1] == 0 and flowerbed[i - 1] == 0 counter += 1 flowerbed[i] = 1

7. if counter >= n return true else return false

# Complexity

- Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```js
var kidsWithCandies = function (candies, extraCandies) {
  // ===> solutions <===

  let resultsArray = [];
  let max = Math.max(...candies);
  candies.forEach((i) => {
    if (i + extraCandies >= max) {
      resultsArray.push(true);
    } else resultsArray.push(false);
  });
  return resultsArray;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
```
