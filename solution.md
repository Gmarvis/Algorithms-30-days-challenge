# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

Recurtion

<!-- Describe your approach to solving the problem. -->

# steps

1. check if str1 + str2 !== str2 + str1 then we return an emty string
2. check if str1 == str2 then we return str1
3. check if the length of str1 > length of str2 then we recurcively call our function passing a substring of str1 at a length of str2 and str2 as params
4. wlse we return recurcively our function passing a substring of str2 at length of str1 and str1 as params

# Complexity

- Time complexity: BigO(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.substring(str2.length), str2);
  } else {
    return gcdOfStrings(str2.substring(str1.length), str1);
  }
};

console.log(gcdOfStrings("ABABAB", "ABAB"));
```
