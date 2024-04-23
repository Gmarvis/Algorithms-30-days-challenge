// steps
// define a variable as results and set it to true and a counter and 0
// check if n = 0 set results to true and return
// check i flowerbed lengh is == 1 and flowerbed at the firsts index = 0 return true else return false
// loop over flowerbed check is flowerbeb[i] = 0 and i = 0 check flowerbed[i+1] == 0  increment counter by one then set flowerbed[i] == 1
// else if flowerbed at the last index = i and flowerbed[i-1] = 0 then coounter + 1 flowerbed[1] = 1
// if flowerbed[i-1] == 0 and flowerbed[i - 1] == 0 counter += 1 flowerbed[i] = 1

// if counter >= n return true else return false

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  let result = true;
  let counter = 0;
  if (n == 0) {
    return (result = true);
  }
  if (flowerbed.length == 1) {
    result = flowerbed[0] == 0 ? true : false;
  } else {
    for (let i = 0; i <= flowerbed.length; i++) {
      if (flowerbed[i] == 0) {
        if (i == 0) {
          if (flowerbed[i + 1] == 0) {
            counter += 1;
            flowerbed[i] = 1;
          }
        } else {
          if (flowerbed.length - 1 == i && flowerbed[i - 1] == 0) {
            counter += 1;
            flowerbed[i] = 1;
          }
          if (flowerbed[i + 1] == 0 && flowerbed[i - 1] == 0) {
            counter += 1;
            flowerbed[i] = 1;
          }
        }
      }
    }
    result = counter >= n ? true : false;
  }
  return result;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
