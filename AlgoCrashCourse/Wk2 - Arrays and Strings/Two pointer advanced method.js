/**
 * ============================================================================
 * Two-Pointer Technique Explained
 * ============================================================================
 *
 * The two-pointer technique is a common and efficient algorithm pattern used
 * primarily with sorted arrays or linked lists. It involves using two pointers
 * (indices or references) that traverse the data structure, often moving
 * towards each other, away from each other, or in the same direction at
 * different speeds.
 *
 * Why use it?
 * - Efficiency: It often reduces the time complexity of problems from O(n^2)
 *   or O(n log n) down to O(n).
 * - In-place operations: Many two-pointer solutions modify the array or list
 *   in-place, reducing space complexity to O(1).
 *
 * ============================================================================
 * Basic Two-Pointer Methods
 * ============================================================================
 *
 * 1. Opposite Ends Pointers (Converging Pointers):
 *    - Pointers start at the beginning and end of the array/list.
 *    - They move towards each other until they meet or cross.
 *    - Use Case: Finding pairs in a sorted array that sum to a target (like Two Sum II),
 *      checking for palindromes, reversing an array.
 *    - Example: `Container With Most Water` below uses a variation of this.
 *
 * 2. Same Direction Pointers (Fast and Slow Pointers):
 *    - One pointer (slow) moves one step at a time.
 *    - The other pointer (fast) moves two or more steps at a time, or moves
 *      conditionally based on some criteria.
 *    - Use Case: Detecting cycles in linked lists, finding the middle element,
 *      problems involving removing duplicates or moving elements (like `Remove Duplicates`
 *      and `Move Zeroes` below).
 *
 * ============================================================================
 * Advanced Two-Pointer Scenarios
 * ============================================================================
 *
 * 1. Three Pointers:
 *    - Extending the concept to three pointers for problems involving triplets
 *      (e.g., 3Sum). Often involves fixing one pointer and using two others
 *      in a converging manner on the remaining subarray.
 *
 * 2. Sliding Window (Related Technique):
 *    - While often considered separate, the core idea of maintaining a "window"
 *      defined by two pointers (start and end) is similar. The window size
 *      can be fixed or variable.
 *    - Use Case: Finding the longest substring without repeating characters,
 *      minimum size subarray sum.
 *
 * 3. Pointers for Merging/Partitioning:
 *    - Used in algorithms like merge sort (merging two sorted arrays) or
 *      quicksort (partitioning). Pointers track positions in different arrays
 *      or different sections of the same array.
 *
 * When to Use Two Pointers:
 * - The input data is sorted or can be sorted efficiently.
 * - You need to find pairs, triplets, or subarrays with specific properties.
 * - You need to perform in-place modifications like removing duplicates or
 *   rearranging elements.
 * - Problems involving linked lists where relative positions matter (cycles, middle element).
 * - Problems where comparing elements from opposite ends or maintaining a
 *   specific structure (like non-zero elements grouped together) is required.
 *
 * ============================================================================
 * Practice Problems
 * ============================================================================
 */

/**
 * LeetCode 26: Remove Duplicates from Sorted Array
 * -------------------------------------------------
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appears only once and returns the new length.
 * Do not allocate extra space for another array; you must do this by
 * modifying the input array in-place with O(1) extra memory.
 *
 * Technique: Same Direction Pointers (Slow and Fast)
 * - `slow` pointer indicates the position where the next unique element should be placed.
 * - `fast` pointer iterates through the array.
 * - If `nums[fast]` is different from `nums[slow]`, it's a unique element.
 *   Increment `slow` and copy `nums[fast]` to `nums[slow]`.
 */
const removeDuplicates = (nums) => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let slow = 0; // Pointer for the position of the last unique element found

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // Place the unique element at the slow pointer position
    }
  }

  // The length of the array with unique elements is slow + 1
  return slow + 1;
};

// Practice Environment for removeDuplicates
console.log("--- Remove Duplicates (LeetCode 26) ---");
let nums1 = [1, 1, 2];
let len1 = removeDuplicates(nums1);
console.log(`Input: [1, 1, 2], Output Length: ${len1}, Modified Array: ${nums1.slice(0, len1)}`); // Expected: 2, [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let len2 = removeDuplicates(nums2);
console.log(`Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], Output Length: ${len2}, Modified Array: ${nums2.slice(0, len2)}`); // Expected: 5, [0, 1, 2, 3, 4]
console.log("\n");


/**
 * LeetCode 283: Move Zeroes
 * --------------------------
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note: You must do this in-place without making a copy of the array.
 *
 * Technique: Same Direction Pointers (Slow and Fast/Current)
 * - `slow` pointer (or `insertPos`) tracks the position where the next non-zero
 *   element should be placed.
 * - `current` pointer iterates through the array.
 * - If `nums[current]` is non-zero, place it at `nums[insertPos]` and increment `insertPos`.
 * - After the first pass, all non-zero elements are in their correct relative order
 *   at the beginning of the array up to `insertPos`.
 * - Fill the rest of the array (from `insertPos` to the end) with zeroes.
 */
const moveZeroes = (nums) => {
  if (!nums || nums.length === 0) {
    return;
  }

  let insertPos = 0; // Pointer for the position to insert the next non-zero element

  // First pass: Move all non-zero elements to the front
  for (let current = 0; current < nums.length; current++) {
    if (nums[current] !== 0) {
      nums[insertPos] = nums[current];
      insertPos++;
    }
  }

  // Second pass: Fill the remaining positions with zeroes
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
  // No return value needed as modification is in-place
};

// Practice Environment for moveZeroes
console.log("--- Move Zeroes (LeetCode 283) ---");
let nums3 = [0, 1, 0, 3, 12];
moveZeroes(nums3);
console.log(`Input: [0, 1, 0, 3, 12], Output: ${nums3}`); // Expected: [1, 3, 12, 0, 0]

let nums4 = [0];
moveZeroes(nums4);
console.log(`Input: [0], Output: ${nums4}`); // Expected: [0]

let nums5 = [1, 0];
moveZeroes(nums5);
console.log(`Input: [1, 0], Output: ${nums5}`); // Expected: [1, 0]
console.log("\n");


/**
 * LeetCode 11: Container With Most Water
 * ---------------------------------------
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which,
 * together with the x-axis forms a container, such that the container
 * contains the most water.
 * Notice that you may not slant the container.
 *
 * Technique: Opposite Ends Pointers (Converging)
 * - `left` pointer starts at the beginning (index 0).
 * - `right` pointer starts at the end (index length - 1).
 * - Calculate the area formed by the lines at `left` and `right`. The width is
 *   `right - left`, and the height is `min(height[left], height[right])`.
 * - Keep track of the maximum area found so far.
 * - Move the pointer pointing to the shorter line inward. Why? Because moving
 *   the taller line inward will never increase the area (since the height is
 *   limited by the shorter line, and the width decreases). Moving the shorter
 *   line inward *might* find a taller line, potentially increasing the area
 *   despite the decreased width.
 * - Repeat until `left` meets `right`.
 */
const maxArea = (height) => {
  if (!height || height.length < 2) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate width and height
    const currentWidth = right - left;
    const currentHeight = Math.min(height[left], height[right]);

    // Calculate current area and update maxWater if needed
    const currentArea = currentWidth * currentHeight;
    maxWater = Math.max(maxWater, currentArea);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// Practice Environment for maxArea
console.log("--- Container With Most Water (LeetCode 11) ---");
let height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`Input: [1, 8, 6, 2, 5, 4, 8, 3, 7], Output: ${maxArea(height1)}`); // Expected: 49

let height2 = [1, 1];
console.log(`Input: [1, 1], Output: ${maxArea(height2)}`); // Expected: 1

let height3 = [4, 3, 2, 1, 4];
console.log(`Input: [4, 3, 2, 1, 4], Output: ${maxArea(height3)}`); // Expected: 16

let height4 = [1, 2, 1];
console.log(`Input: [1, 2, 1], Output: ${maxArea(height4)}`); // Expected: 2
console.log("\n");

/**
 * ============================================================================
 * End of Practice Problems
 * ============================================================================
 */
