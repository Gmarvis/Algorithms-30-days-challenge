var isSubsequence = function (s, t) {
    // define two pointers to keep track of the position of each character in both strings
    let sp = 0;
    let tp = 0;

    // loop over but strings with a while loog

    while (sp < s.length && tp < t.length) {
        //check if s[sp] === to t[tp]
        // if true we increment sp
        // always increment tp
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }
    // return the results of sp equal to the length of s
    return sp === s.length;
};
