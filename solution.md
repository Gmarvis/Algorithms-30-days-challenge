### Leetcode

# problem (Reverse Words in a String)

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

1. fist trim the the string to remove any leading spaces
2. difine as stringArray and set it to an empty array
3. split the trimed string
4. loop over the splited string an push evey wore to the stringArray
5. reverse the string array
6. join and return the reversed string array

# Complexity

- Time complexity: BigO(n + n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```js
let vawels = ["a", "e", "i", "o", "u"];
let stringArray = s.split("");
let vawelsInString = [];

stringArray.forEach((letter) => {
  if (vawels.includes(letter.toLowerCase())) {
    vawelsInString.push(letter);
  }
});
let reversedVawels = vawelsInString.reverse();
let count = 0;

for (let i = 0; i <= stringArray.length; i++) {
  if (reversedVawels.includes(stringArray[i])) {
    stringArray[i] = reversedVawels[count];
    count += 1;
  }
}

return stringArray.join("");
```
