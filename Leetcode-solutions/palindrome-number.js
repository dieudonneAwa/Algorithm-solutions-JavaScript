// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.
// Example 1: isPalindrome(121), Output = true; 
// Example 2: isPalindrome(123), Output = false;

/**
 * SOLUTION 1
 * 
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let revInt = 0, sign = 1;
    const oldX = x;
    if (x < 0) {
        x *= -1;
        sign = -1;
    }
    while (x > 0) {
        a = x % 10;
        revInt = revInt * 10 + a;
        x = Math.floor(x / 10);
    }
    return revInt === oldX;
};

/**
 * SOLUTION 2
 * 
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    let rev = '';
    const numString = x.toString();
    for (let char of numString) {
        rev = char + rev;
    }
    const reversedInt = parseInt(rev, 10);
    return reversedInt === x;
};

isPalindrome();