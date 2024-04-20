// solution
// 1. convert both strings into an array
// 2. create a variable and assign it to an empty array to store the divisor characters
// 3. iterate over both arrays
// 4. check if letter at first array match that of second array at same index then push leter in the divisor array
// 5.

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  let divisor = [];
  let start = 0;
  let end = 0;
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      if (divisor.includes(arr1[i]))
        return divisor.toString().split(",").join("");
      divisor.push(arr2[i]);
      end += 1;
    }
  }

  return divisor.toString().split(",").join("");
};
// console.log(gcdOfStrings("ABABAB", "ABAB"));

// the above metthod is failing one test case

// method 2 Using RECURSION
// steps
// 1. check if str1 + str2 !== str2 + str1 then we return an emty string
// 2. check if str1 == str2 then we return str1
// 3. check if the length of str1 > length of str2 then we recurcively call our function passing a substring of str1 at a length of str2 and str2 as params
// 4. wlse we return recurcively our function passing a substring of str2 at length of str1 and str1 as params

// solution

var gcdOfStrings = function (str1, str2) {
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

console.log(gcdOfStrings("ABABAB", "ABAB")); // time comlexity Big O(n)
