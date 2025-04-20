// 🧠 LeetCode 349: Intersection of Two Arrays

/*
🔍 Problem Description:
Given two integer arrays `nums1` and `nums2`, return an array of their **intersection**.

Each element in the result must be **unique**, and you may return the result in **any order**.

📌 Constraints:
- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000
*/

function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const output = [];
    console.log(set1);
    for( num of set2.values()){
        if(set1.has(num)) output.push(num);
    }
    return output;
}

// ✅ Test Cases

console.log(intersection([1, 2, 2, 1], [2, 2]));           // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));     // [4, 9]
console.log(intersection([], [1, 2, 3]));                  // []
console.log(intersection([1, 2, 3], []));                  // []
console.log(intersection([1, 1, 1], [1]));                 // [1]
console.log(intersection([1, 2, 3], [4, 5, 6]));           // []
console.log(intersection([1000], [1000]));                 // [1000]
console.log(intersection([1, 2, 2, 3], [2, 3, 4]));         // [2, 3]
console.log(intersection([0, 0, 0], [0]));                 // [0]
console.log(intersection([5, 10, 15], [15, 10, 5, 10]));   // [5, 10, 15]

// 🧭 Approach:

/*
### Step-by-Step Strategy: Using Sets for Uniqueness and Fast Lookup

1. Convert one of the arrays (say `nums1`) to a `Set` to remove duplicates and allow O(1) lookup.
2. Iterate through `nums2`:
   - For each element, check if it exists in the `Set`.
   - If it does, add it to the result set (to ensure uniqueness).
3. Convert the result set back to an array and return it.

Why a set?
- Set provides constant time lookup and automatically filters duplicates.

### Time and Space Complexity:

- **Time Complexity**: O(n + m)
  - n = length of nums1
  - m = length of nums2
- **Space Complexity**: O(n) — for the sets used
*/

// 📚 Educational Insight: Using Sets for Filtering & Lookup

/*
### Core Concept: Set Membership and Deduplication

Sets are **perfect** for problems that involve:
- Checking if an element exists (O(1) on average)
- Avoiding duplicates

In this problem:
- `Set(nums1)` gives us a quick lookup table
- `Set(result)` guarantees unique answers
- This avoids both nested loops and manual deduplication

### Real-World Analogy:
Think of two guest lists for parties. You want to know which guests were invited to both:
- Make a quick name list of one group (like a checklist)
- Go through the second list and check who’s already on the checklist
- Mark who was on both lists — but no duplicates

### Key Takeaway:
Set operations (union, intersection, difference) are must-know tools in your algorithm toolbox, especially for filtering and lookup problems.
*/