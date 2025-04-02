// two pointer method beginner.js

/**
 * ==========================
 * Two Pointer Method Explained
 * ==========================
 *
 * What is it?
 * The Two Pointer method is an algorithmic technique often used for searching pairs in a sorted array or linked list.
 * It involves using two pointers (indices or references), typically starting at opposite ends (one at the beginning, one at the end)
 * or sometimes both at the beginning, and moving them towards each other or in the same direction based on certain conditions.
 * This approach helps optimize solutions, often reducing time complexity from O(n^2) to O(n).
 *
 * When to use it?
 * 1. Sorted Arrays/Lists: It's particularly effective when the data structure is sorted. You can leverage the sorted property
 *    to make decisions about moving the pointers.
 * 2. Finding Pairs: Problems that require finding pairs of elements that satisfy a certain condition (e.g., sum equals a target).
 * 3. Palindrome Checks: Checking if a string or array is a palindrome.
 * 4. Removing Duplicates: Removing duplicates from a sorted array in-place.
 * 5. Subarray/Substring Problems: Finding subarrays or substrings with specific properties.
 *
 * Key Variations:
 * - Opposite Ends: Pointers start at the beginning and end, moving towards the middle. Common for pair-finding in sorted arrays, palindrome checks.
 * - Same Direction (Fast/Slow): Pointers start at the same position but move at different speeds. Common in linked list cycle detection or finding the middle element.
 * - Sliding Window (Implicit): While often considered a separate technique, some sliding window problems use two pointers to define the window boundaries.
 *
 * ==========================
 * Popular Problems Using Two Pointers
 * ==========================
 *
 * - Two Sum II - Input array is sorted (LeetCode 167): Find two numbers that add up to a specific target.
 * - Valid Palindrome (LeetCode 125): Check if a string is a palindrome, ignoring non-alphanumeric characters.
 * - Reverse String (LeetCode 344): Reverse a string in-place.
 * - Squares of a Sorted Array (LeetCode 977): Given a sorted array, return an array of the squares of each number, also sorted.
 * - Container With Most Water (LeetCode 11): Find two lines that together with the x-axis form a container that holds the most water.
 * - 3Sum (LeetCode 15): Find all unique triplets in the array which gives the sum of zero. (Often involves sorting then using two pointers within a loop).
 * - Remove Duplicates from Sorted Array (LeetCode 26): Remove duplicates in-place such that each element appears only once.
 *
 * ==========================
 * Practice Functions
 * ==========================
 */

/**
 * Reverses a string using the two-pointer method.
 * Pointers start at the beginning and end, swapping characters as they move towards the center.
 * @param {string} s The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(s) {
  // let sArr = s.split('');
  // let left = 0, right = sArr.length - 1;
  // while (left < right){
  //   [sArr[left],sArr[right]] = [sArr[right],sArr[left]];
  //   left++;
  //   right--;
  // }
  // return sArr.join("");
}
// console.log("--- reverseString ---");
// console.log(reverseString("hello")); // Expected: "olleh"
// console.log(reverseString("fozzie and cole")); // Expected: "olleh"
// console.log(reverseString("A"));     // Expected: "A"
// console.log(reverseString(""));      // Expected: ""
/**
 * Reverses an array in-place using the two-pointer method.
 * Pointers start at the beginning and end, swapping elements as they move towards the center.
 * @param {any[]} arr The array to reverse.
 * @returns {void} The array is modified in-place.
 */
function reverseArray(arr) {
  // let left = 0; right = arr.length - 1;
  // while ( left < right){
  //   [arr[left], arr[right]] = [arr[right], arr[left]];
  //   left++;
  //   right--;
  // }
}
// console.log("\n--- reverseArray ---");
// let arr1 = [1, 2, 3, 4, 5];
// reverseArray(arr1);
// console.log(arr1); // Expected: [5, 4, 3, 2, 1]
// let arr2 = ["a", "b", "c"];
// reverseArray(arr2);
// console.log(arr2); // Expected: ["c", "b", "a"]
/**
 * 
 * 
 * Checks if a string is a palindrome using the two-pointer method.
 * Pointers start at the beginning and end, comparing characters as they move towards the center.
 * Consider edge cases like spaces, punctuation, and case sensitivity if required by the specific problem.
 * @param {string} s The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function palindromeCheck(s) {
  // let left = 0; right = s.length-1;
  // while (left < right){
  //   if( s[left].toLowerCase() !== s[right].toLowerCase()) return false;
  //   left++;
  //   right--;
  // }
  // return true;
}

// console.log("\n--- palindromeCheck ---");
// console.log(palindromeCheck("racecar")); // Expected: true
// console.log(palindromeCheck("hello"));   // Expected: false
// console.log(palindromeCheck("A man, a plan, a canal: Panama")); // Expected: true (if handling non-alphanumeric)

/**
 * Finds two numbers in a SORTED array that add up to a target value.
 * Uses the two-pointer method with pointers starting at opposite ends.
 * @param {number[]} sortedNums A sorted array of numbers.
 * @param {number} target The target sum.
 * @returns {number[] | null} An array containing the indices (or values) of the two numbers, or null if no such pair exists.
 */
function twoSumOrdered(sortedNums, target) {
  // let left = 0; right = sortedNums.length - 1;
  // while(left < right){
  //   let sum = sortedNums[left] + sortedNums[right];
  //   if(sum === target) return [left,right];
  //   if( sum > target){
  //     right--;
  //   } else {
  //     left++
  //   }
  // }
  // return null;
}
// console.log("\n--- twoSumOrdered ---");
console.log(twoSumOrdered([2, 7, 11, 15], 9));  // Expected: [0, 1] (indices) or [2, 7] (values) depending on implementation
console.log(twoSumOrdered([2, 3, 4], 6));      // Expected: [0, 2] or [2, 4]
console.log(twoSumOrdered([-1, 0, 3, 5], 2));  // Expected: [0, 2] or [-1, 3]
console.log(twoSumOrdered([1, 2, 3], 7));      // Expected: null

/**
 * Finds two numbers in an UNORDERED array that add up to a target value.
 * Note: The standard two-pointer approach (opposite ends) requires a sorted array.
 * For an unordered array, a common approach is using a Hash Map (Set or Object in JS).
 * This function is included for comparison, but typically wouldn't use the classic two-pointer method directly without sorting first.
 * If sorting is allowed, sort first then use the twoSumOrdered approach.
 * @param {number[]} nums An unordered array of numbers.
 * @param {number} target The target sum.
 * @returns {number[] | null} An array containing the indices (or values) of the two numbers, or null if no such pair exists.
 */
function twoSumUnordered(nums, target) {
  // let seen = {};
  // for( let i = 0; i < nums.length; i++){
  //   let currVal = nums[i]
  //   let compliment = target - currVal;
  //   if(compliment in seen) return [seen[compliment], i];
  //   seen[currVal] = i;
  // }
  // return null;
}


// console.log("\n--- twoSumUnordered ---");
// console.log(twoSumUnordered([15, 7, 2, 11], 9)); // Expected: [1, 2] (indices) or [7, 2] (values)
// console.log(twoSumUnordered([3, 2, 4], 6));     // Expected: [1, 2] or [2, 4]
// console.log(twoSumUnordered([3, 3], 6));        // Expected: [0, 1] or [3, 3]
// console.log(twoSumUnordered([1, 5, 9], 15));    // Expected: null

