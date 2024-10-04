/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longest_word_idx = 0, curr_idx = 1) {
  let longest_word = words[longest_word_idx];
  if (words[curr_idx]) {
    if (longest_word.length < words[curr_idx].length) return longest(words, longest_word_idx = curr_idx, curr_idx + 1);
    else return longest(words, longest_word_idx, curr_idx + 1);
  }
  return longest_word.length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr = "", i = 0) {
  if (i >= str.length) return newStr;
  return everyOther(str, newStr + str[i], i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, state = true) {
  if (i === str.length) return state;
  else if (!state) return state;
  return isPalindrome(str, i + 1, state = str[i] === str[(str.length - 1) - i]);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;
  else if(arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
