// Assume we are dealing with an environment which could only store integers
// within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose
// of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * SOLUTION 1
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a = 0, revInt = 0;
    let sign = 1;
    if (x < 0) {
        x *= -1;
        sign = -1;
    }
    while (x > 0) {
        a = x % 10;
        revInt = revInt * 10 + a;
        x = Math.floor(x / 10);
    }
    if ((revInt <= (2 ** 31) - 1)) {
        return revInt * sign;
    }
    return 0;
};

/**
 * SOLUTION 2
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const sign = Math.sign(x);
    let rev = '';
    const numString = x.toString();
    for (let char of numString) {
        rev = char + rev;
    }
    const reversedInt = parseInt(rev, 10) * sign;
    if (reversedInt > (-1*2) ** 31 && reversedInt < 2 ** 31 - 1) {
        return reversedInt;
    }
    return 0;
};

/**
 * SOLUTION 3
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const sign = Math.sign(x);
    const numString = x.toString();
    const rev = numString.split('').reverse().join('');
    const reversedInt = parseInt(rev, 10) * sign;
    if (reversedInt > (-1*2) ** 31 && reversedInt < 2 ** 31 - 1) {
        return reversedInt;
    }
    return 0;
};

console.log(reverse(-123));