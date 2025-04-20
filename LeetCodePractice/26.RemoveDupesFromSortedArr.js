// 🧠 LeetCode 26: Remove Duplicates from Sorted Array

/*
🔍 Problem Description:
Given an integer array `nums` **sorted in non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

Return the number of unique elements, and update `nums` in-place to contain the unique elements at the start of the array.

You must do this in O(1) extra memory.

📌 Constraints:
- 1 <= nums.length <= 3 × 10⁴
- -100 <= nums[i] <= 100
- `nums` is sorted in non-decreasing order
*/

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let j = 0; // slow pointer (index of last unique element seen)
    
    for (let i = 1; i < nums.length; i++) {
    //if slow pointer and fast pointer do NOT equal each other, unique value found 
    //and will prep to swap out duplicate with unique value
      if (nums[i] !== nums[j]) {
        j++;
        //swaps (rewrites) current duplicate with unique value at fast location
        nums[j] = nums[i];
      }
    }
    // The length of the unique portion is j + 1
    return j + 1;
}

// ✅ Test Cases

let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); // 2, arr1 should be [1, 2, _]

let arr2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr2)); // 5, arr2 should be [0,1,2,3,4,_]

let arr3 = [1,2,3];
console.log(removeDuplicates(arr3)); // 3, already unique

let arr4 = [1,1,1,1];
console.log(removeDuplicates(arr4)); // 1, all same

let arr5 = [1];
console.log(removeDuplicates(arr5)); // 1, single element

let arr6 = [1,1,2,2,3,3,4,4,5];
console.log(removeDuplicates(arr6)); // 5

let arr7 = [-3, -3, -2, -1, 0, 0, 1, 2];
console.log(removeDuplicates(arr7)); // 6

let arr8 = [-1,0,0,0,0,3,3];
console.log(removeDuplicates(arr8)); // 3

let arr9 = [100,100,101];
console.log(removeDuplicates(arr9)); // 2

let arr10 = [1,2,3,4,5,6];
console.log(removeDuplicates(arr10)); // 6

// 🧭 Approach:

/*
### Step-by-Step Strategy: Two-Pointer In-Place Update

1. If the array is empty, return 0.
2. Use a slow pointer `i` that tracks the position of the last unique element.
3. Use a fast pointer `j` to scan through the array.
4. If `nums[j] !== nums[i]`, increment `i` and copy `nums[j]` to `nums[i]`.
5. After the loop, `i + 1` will represent the number of unique elements.

This effectively keeps all unique elements in the first part of the array and overwrites duplicates in-place.

### Time and Space Complexity:

- **Time Complexity**: O(n) — single pass through the array.
- **Space Complexity**: O(1) — no additional storage is used.
*/

// 📚 Educational Insight: Two Pointers for In-Place Deduplication

/*
### Core Concept: Two Pointers with Sorted Input

Because the input is sorted:
- All duplicates are grouped together.
- You can confidently skip duplicates by comparing adjacent elements.

**Pattern**: One pointer reads (`j`), the other writes (`i`).

This pattern is very powerful for:
- Filtering or removing elements in-place.
- Shrinking/compacting arrays.
- Optimizing space usage for problems with overwrite constraints.

### Common Variants:
- Remove all instances of a specific value
- Remove duplicates allowing only k duplicates
- Remove/compact zeros, negatives, or nulls

### Real-World Analogy:
Imagine you're packing a suitcase from a list of clothes. If you've already packed a shirt, you skip duplicates and move on to the next unique item, placing it in the next empty spot.

### Key Takeaway:
Using two pointers for in-place problems lets you **avoid extra space** while maintaining linear performance.
*/