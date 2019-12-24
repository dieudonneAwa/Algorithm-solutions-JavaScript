/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    let prev = 0;
    // Loop through all characters in s
    for (let char of s) {
        const curr = map[char]; // if a char is a key in map, assing its value to curr (which is a number)
        if (curr <= prev) { // Is curr <= prev? (which will be false at the first iteration)
            result += curr;
        } else {
            result += curr - (2 * prev);
        }
        prev = curr;
    }
    return result;
};

console.log(romanToInt('XIV'));