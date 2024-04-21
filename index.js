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
