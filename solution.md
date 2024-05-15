### Leetcode

# problem (String Compression)

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# steps

Initialize an empty string res to store the compressed string.
Initialize a character c to store the current character being processed.
Initialize an integer count to store the count of consecutive repeating characters.
Iterate through the input array chars.
For each character:
If c is empty, update c to the current character, increment count by 1, and append the character to res.
If the current character is equal to c, increment count by 1.
If the current character is different from c, check if count is greater than 1. If yes, append count to res.
Reset c to empty and reset count to 0.
After the loop, if count is greater than 1, append it to res.
Copy characters from res back to the input array chars.
Return the length of the compressed string res.

# Complexity

-   Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

-   Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```js
var compress = function (chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); //["a","2","b","2","3"]
console.log(compress(["a"])); // ["a"]
console.log(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // ["a", "b", "1","2"]
```
