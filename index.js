let s = " a good   example ";
let b = "  world hello  ";
let c = "  hello world  ";

var reverseWords = function (s) {
  s.trim();
  stringArray = [];
  s.split(" ").forEach((elem) => {
    if (elem !== "") {
      stringArray.push(elem);
    }
  });
  return stringArray.reverse().join(" ");
};

console.log(reverseWords(s));
console.log(reverseWords(b));
console.log(reverseWords(c));
