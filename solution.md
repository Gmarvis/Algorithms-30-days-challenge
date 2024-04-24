### Leetcode

# problem (Reverse Vowels of a String

)

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

1. define a varable for all vawel sound in the array to an empty array
2. difine an array of valwels
3. loop through the string array for each letter in the array we do the folloe checks :-4
4. ---> check if the vawels array includes that string if yes we push to vawelsInSting array
5. revease the vawelsInString array
6. loop again over the string array for every vawel sound in the string, we replace with the first letter in the vawelsInStrings array and the vawel from the array
7. lastly we return revered string

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
