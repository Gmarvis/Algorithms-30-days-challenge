var strStr = function (haystack, needle) {
    // **********pseudo code**********

    // 1- make a nested loop throw the string(haystack)
    // where at every index of the string(haystack),
    // we loop throw the target string(needle)

    // --loop throw the string(haystack)
    // defined a variable "isMatch" that defines wether the strings match or not
    // -- ON the j loop we loop throw throw the target string(needle)
    //     check if the chart at each index match at both index
    //     if they match we set isMatch variable to true
    //     if they don't match we set it to false and then break
    // lastly we check its a match we return the index else we return -1

    if (!needle) return 0;

    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};

// solution 2
var strStrSolutionTwo = function (haystack, needle) {
    // step 1 get the lengths of both strings
    // step 2 check if the target length is === 0 and return 0
    // Step 3: Loop through haystack up to the point where the remaining substring can fit needle
    // Step 4: Check if the substring of haystack from the current index matches needle
    // Step 5: If a match is found, return the current index
    // Step 6: If no match is found, return -1
    let htsLength = haystack.length;
    let ntLength = needle.length;
    if (ntLength === 0) return 0;
    for (let i = 0; i <= htsLength - ntLength; i++) {
        if (haystack.substring(i, ntLength) === needle) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", ""));
console.log(strStr("leetcode", "leeto"));
console.log(strStrSolutionTwo("sadbutsad", ""));
console.log(strStrSolutionTwo("leetcode", "leeto"));
