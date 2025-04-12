// 🧠 LeetCode 1: Two Sum

/*
🔍 Problem Description:
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

📌 Constraints:
- 2 <= nums.length <= 10⁴
- -10⁹ <= nums[i] <= 10⁹
- -10⁹ <= target <= 10⁹
- Only one valid answer exists
*/

function twoSum(nums, target) {

}

// ✅ Test Cases

console.log(twoSum([2, 7, 11, 15], 9));           // [0, 1] - Basic example
console.log(twoSum([3, 2, 4], 6));                // [1, 2] - Duplicates involved
console.log(twoSum([3, 3], 6));                   // [0, 1] - Identical elements
console.log(twoSum([1, 2, 3, 4, 5], 9));          // [3, 4] - Pair toward the end
console.log(twoSum([-1, -2, -3, -4, -5], -8));    // [2, 4] - Negative numbers
console.log(twoSum([-3, 4, 3, 90], 0));           // [0, 2] - Zero target
console.log(twoSum([0, 4, 3, 0], 0));             // [0, 3] - Zeroes in array
console.log(twoSum([1, 3], 4));                   // [0, 1] - Smallest valid input
console.log(twoSum([2, 5, 5, 11], 10));           // [1, 2] - Same value, different indices
console.log(twoSum([1, 2], 3));                   // [0, 1] - Only one possible pair

// 🧭 Approach:

/*
### Step-by-Step Strategy:

1. Initialize an empty hash map (object or `Map`) to store each number and its index.
2. Loop through the `nums` array:
   - For each number, calculate its **complement**: `target - currentNumber`.
   - Check if the complement already exists in the map.
     - If it does, we’ve found the pair. Return an array with the index of the complement and the current index.
   - If it doesn't, store the current number and its index in the map.
3. Since the problem guarantees one solution, we don’t need to handle “no pair found”.

### Why This Works:

- By storing previously seen numbers, we reduce the problem from **checking every pair (O(n²))** to **checking each number once (O(n))**.
- The hash map lets us instantly check if the needed complement is already in the array without looping through it again.

### Time and Space Complexity:

- **Time Complexity**: O(n) — one pass through the array.
- **Space Complexity**: O(n) — in the worst case, we store every number in the hash map.
*/

// 📚 Educational Insight: Using Hash Maps for Constant-Time Lookup

/*
Hash maps (or objects in JavaScript) are key-value stores that allow for near-instant access to data using a key.

In algorithmic problem-solving, hash maps are often your best friend when:

✔️ You want to check existence quickly (e.g., if a number has already appeared).  
✔️ You need to retrieve a value without scanning an array.  
✔️ You need to **store relationships** like value-to-index, frequency of elements, or matched pairs.

### Real-World Analogy:
Think of a hash map as a phonebook. You don’t need to read through every name to find someone—you jump straight to the page using the key (their name).

### Common Use Cases:
- Two Sum problems
- Detecting duplicates
- Frequency counters
- Caching/memoization
- Set-like behavior with unique keys

By mastering hash maps, you're unlocking a toolkit that helps tackle a huge range of coding interview problems more efficiently.
*/