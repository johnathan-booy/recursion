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

function everyOther(str, i = 0) {
	if (i >= str.length) return "";

	return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
	if (i > Math.floor(str.length / 2)) return true;
	if (str[i] !== str[str.length - 1 - i]) return false;
	return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i >= arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
	if (i < 0) return "";
	const newStr = str[i] + revString(str, i - 1);
	return newStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	const stringArr = [];
	for (let key in obj) {
		if (typeof obj[key] === "string") stringArr.push(obj[key]);
		if (typeof obj[key] === "object")
			stringArr.push(...gatherStrings(obj[key]));
	}
	return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, first = 0, last = arr.length - 1) {
	if (first > last) return -1;

	const idx = first + Math.floor((last - first) / 2);

	if (arr[idx] === val) return idx;
	if (arr[idx] < val) return binarySearch(arr, val, idx + 1, last);
	if (arr[idx] > val) return binarySearch(arr, val, first, idx - 1);
}

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
