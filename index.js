// Leetcode ====> Merge Strings Alternately

// Psudo code
// ===> steps <====

// 1. convert the two string into and array of characters eg arr1 and arr2
// 2. define a varaible called merged array to store merged characters
// 3. difine a variable called longArray
// 3. check if both arrays of the same size is yes continue to step 4 else set longArray to take the longer array
// 4. iterate over but array push each character to our defined mergedArray stating with the first arr or the first sting in the params
// 5. convert the mergedArray back to a string and return it

// solution

var mergeAlternately = function (word1, word2) {
  let mergedArray = [];

  let arr1 = word1.split("");
  let arr2 = word2.split("");

  let longArr;
  if (arr1.length > arr2.length) {
    longArr = arr1;
  } else {
    longArr = arr2;
  }
  for (let i = 0; i < longArr.length; i++) {
    mergedArray.push(arr1[i]);
    mergedArray.push(arr2[i]);
  }
  return mergedArray.toString().split(",").join("");
};
console.log(mergeAlternately("abc", "pqrzzzz"));
