var kidsWithCandies = function (candies, extraCandies) {
  // declare a variable say resultsArray = []
  // iterate over the candies array
  // at each index add extraCadies to existing candies
  // check if the result after added is >= max candies
  // if yes we push true to the result array else push false
  // lastly we return resultsArray

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

// bonus
/*
Declare a function 'isMonotonicArr' that takes in an array of numbers as its single argument. This function should return a boolean value indicating whether the input array is either in ascending or descending order, meaning each subsequent element is either greater than or equal to (in the case of ascending order) or less than or equal to (in the case of descending order) the preceding element.

console.log(isMonotonicArr([333, 4444, 55555, 666666]));	// true
console.log(isMonotonicArr([9, 5, 5, 2, 1, 1]));	        // true
console.log(isMonotonicArr([0, 1, 0, 1, 0, 1, 0, 1, 0]));	// false
*/
