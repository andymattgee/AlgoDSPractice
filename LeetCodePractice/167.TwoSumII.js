// 🧠 LeetCode 167: Two Sum II – Input Array Is Sorted

/*
🔍 Problem Description:
Given a **1-indexed** array of integers `numbers` that is **already sorted in non-decreasing order**, find two numbers such that they add up to a specific `target` number.

Return the indices of the two numbers **added by one**, as an integer array `answer = [index1, index2]` where:
- 1 <= index1 < index2 <= numbers.length

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

📌 Constraints:
- 2 <= numbers.length <= 3 × 10⁴
- -1000 <= numbers[i] <= 1000
- -1000 <= target <= 1000
- Only one valid answer exists
*/

function twoSum(numbers, target) {
   let left = 0;
   let right = numbers.length - 1;
   while(left < right){
    let sum = numbers[left] + numbers[right];
    if(sum === target) return [left + 1, right + 1];
    if(sum < target) left++;
    else right--;
   }
}

// ✅ Test Cases

console.log(twoSum([2, 7, 11, 15], 9));           // [1, 2]
console.log(twoSum([2, 3, 4], 6));                // [1, 3]
console.log(twoSum([-1, 0], -1));                 // [1, 2]
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); // [4, 5]
console.log(twoSum([5, 25, 75], 100));            // [2, 3]
console.log(twoSum([1, 3, 4, 5, 7, 10, 11], 9));   // [3, 5]
console.log(twoSum([1, 2], 3));                   // [1, 2]
console.log(twoSum([1, 2, 3, 4], 7));             // [3, 4]
console.log(twoSum([-3, -1, 0, 2, 4, 5], 1));     // [2, 6]
console.log(twoSum([1, 3, 5, 7, 9], 10));         // [2, 4]

// 🧭 Approach:

/*
### Step-by-Step Strategy: Two Pointers in Sorted Array

1. Initialize two pointers:
   - `left` at the beginning (index 0)
   - `right` at the end (index numbers.length - 1)
2. While left < right:
   - Calculate `sum = numbers[left] + numbers[right]`
   - If sum equals target, return [left + 1, right + 1]
   - If sum < target, move left pointer right to increase sum
   - If sum > target, move right pointer left to decrease sum

This works **only because the array is sorted**, allowing us to use logic about increasing/decreasing values.

### Time and Space Complexity:

- **Time Complexity**: O(n) — single pass
- **Space Complexity**: O(1) — constant space, just two pointers
*/

// 📚 Educational Insight: Two Pointers for Pair Matching

/*
### Core Concept: Two-Pointer Converging from Both Ends

This problem demonstrates the power of **knowing your input is sorted**.

Because it’s sorted:
- We don’t need to use a hash map or nested loops.
- We can take advantage of value directionality — if the current pair is too small, increase the left side; if it’s too big, decrease the right.

### Real-World Analogy:
Think of finding two prices in a sorted price list that add up to your budget.
Start from both ends:
- If it's too expensive, drop the higher price.
- If it's too cheap, raise the lower price.

### Key Takeaway:
The two-pointer method is often the most **optimal and readable** solution for sorted data — always ask yourself:
✅ “Is the input sorted?”
✅ “Can I scan from both sides?”

This is one of the most commonly reused patterns in interview problems across strings, arrays, and even linked lists.
*/