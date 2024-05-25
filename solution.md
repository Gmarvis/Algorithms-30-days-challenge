### Leetcode

# problem (Is Subsequence)

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

# Intuition

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

```js
var isSubsequence = function (s, t) {
    // define two pointers to keep track of the position of each character in both strings
    let sp = 0;
    let tp = 0;

    // loop over but strings with a while loog

    while (sp < s.length && tp < t.length) {
        //check if s[sp] === to t[tp]
        // if true we increment sp
        // always increment tp
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }
    // return the results of sp equal to the length of s
    return sp === s.length;
};
```
