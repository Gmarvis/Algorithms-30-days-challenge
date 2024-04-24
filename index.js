var reverseVowels = function (s) {
  // define a varable for all vawel sound in the array to an empty array
  // difine an array of valwels
  // loop through the string array for each letter in the array we do the folloe checks :-4
  // ---> check if the vawels array includes that string if yes we push to vawelsInSting array
  // revease the vawelsInString array
  // loop again over the string array for every vawel sound in the string, we replace with the first letter in the vawelsInStrings array and the vawel from the array
  // lastly we return revered string

  let vawels = ["a", "e", "i", "o", "u"];
  let vawelsInString = [];
  let stringArray = s.split("");

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
};

console.log(reverseVowels("aA"));
console.log(reverseVowels("hello"));
console.log(reverseVowels("metter"));
console.log(reverseVowels("mattAr"));
