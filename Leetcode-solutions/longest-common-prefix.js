/**
 * SOLUTION 1
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length < 1) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i <= strs.length - 1; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) {
        return '';
      }
    }
  }
  return prefix;
};

/**
 * SOLUTION 2
 * 
 * @param {string[]} strs
 * @return {string}
 */
const comparePrefix = (left, right) => {
  let min = 0, i = 0;
  if (!left.length || !right.length) {
    return '';
  }
  if (left.length <= right.length) {
    min = left.length;
  } else {
    min = right.length;
  }

  for (let i = 0; i < min; i++) {
    if (left[i] !== right[i]) {
      return right.slice(0, i);
    }
  }
  return right.slice(0, min);
}

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  const mid = Math.floor(strs.length / 2);
  const left = strs.slice(0, mid);
  const right = strs.slice(mid);

  const l = longestCommonPrefix(left);
  const r = longestCommonPrefix(right);

  return comparePrefix(l, r);
};
