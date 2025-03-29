/**
 * Sliding Window Technique Explanation:
 *
 * The sliding window technique is used to efficiently solve problems involving arrays or strings
 * where you need to find or calculate something among all contiguous subarrays or substrings of a fixed size.
 *
 * Imagine a window of a fixed size 'k' sliding over the array. Instead of recalculating the sum/value
 * for each window from scratch, we reuse the calculation from the previous window.
 *
 * How it works:
 * 1. Initialize a window covering the first 'k' elements. Calculate the initial value (e.g., sum).
 * 2. Slide the window one step to the right:
 *    - Subtract the element that is leaving the window (the leftmost element).
 *    - Add the new element that is entering the window (the rightmost element).
 * 3. Update the result (e.g., maximum sum) based on the current window's value.
 * 4. Repeat step 2 and 3 until the window reaches the end of the array.
 *
 * This reduces the time complexity from O(n*k) (brute force) to O(n) because each element is processed only twice (once when entering the window, once when leaving).
 */

console.log("--- Sliding Window Technique Examples ---");

// --- Practice Problem 1: Maximum Sum Subarray of Size K ---
/**
 * Given an array of positive numbers and a positive number 'k',
 * find the maximum sum of any contiguous subarray of size 'k'.
 *
 * Example:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */
const findMaxSumSubarray = function(arr, k) {
  if (arr.length < k || k <= 0) {
    return 0; // Or throw an error, depending on requirements
  }

  let maxSum = 0;
  let currentSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd]; // Add the next element to the window

    // Slide the window if we have reached size 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater
      currentSum -= arr[windowStart]; // Subtract the element leaving the window
      windowStart++; // Slide the window forward
    }
  }

  return maxSum;
};

// Example Usage for Problem 1:
const arr1 = [2, 1, 5, 1, 3, 2];
const k1 = 3;
console.log(`\nProblem 1: Max Sum Subarray`);
console.log(`Input: arr = [${arr1}], k = ${k1}`);
console.log(`Output: ${findMaxSumSubarray(arr1, k1)}`); // Expected output: 9

const arr2 = [2, 3, 4, 1, 5];
const k2 = 2;
console.log(`Input: arr = [${arr2}], k = ${k2}`);
console.log(`Output: ${findMaxSumSubarray(arr2, k2)}`); // Expected output: 7


// --- Practice Problem 2: Averages of Subarrays of Size K ---
/**
 * Given an array, find the average of all contiguous subarrays of size 'k' in it.
 *
 * Example:
 * Input: [1, 3, 2, 6, -1, 4, 1, 8, 2], k=5
 * Output: [2.2, 2.8, 2.4, 3.6, 2.8]
 */
const findAveragesOfSubarrays = function(arr, k) {
  const result = [];
  if (arr.length < k || k <= 0) {
    return result; // Return empty array if input is invalid
  }

  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // Add the next element

    // Slide the window when we hit size 'k'
    if (windowEnd >= k - 1) {
      result.push(windowSum / k); // Calculate the average and add to result
      windowSum -= arr[windowStart]; // Subtract the element leaving
      windowStart++; // Slide the window ahead
    }
  }

  return result;
};

// Example Usage for Problem 2:
const arr3 = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k3 = 5;
console.log(`\nProblem 2: Averages of Subarrays`);
console.log(`Input: arr = [${arr3}], k = ${k3}`);
console.log(`Output: [${findAveragesOfSubarrays(arr3, k3)}]`); // Expected output: [2.2, 2.8, 2.4, 3.6, 2.8]
