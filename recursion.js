/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	// base case
	if (nums.length === i) return 1;

	// normal case
	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
	if (i === words.length) {
		return 0;
	}

	const length = words[i].length;
	const longestWord = longest(words, i + 1);

	return length > longestWord ? length : longestWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
